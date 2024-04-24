const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/NikeApp");

// Token verification middleware
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, "my-secret-key");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

app.post('/Login', (req, res) => {
    const { name, password } = req.body;
    console.log("Login request:", name);
  
    UsersModel.findOne({ name: name })
      .then(user => {
        if (user) {
          bcrypt.compare(password, user.password, (err, response) => {
            if (err) {
              console.error("bcrypt error:", err);
              res.status(500).json('Internal Server Error');
            } else if (response) {
              const token = jwt.sign({ name: user.name }, "my-secret-key");
              res.cookie('token', token, { httpOnly: true });
              res.json({ success: true, redirect: '/', name: user.name }); 
              console.log('logged in', user.name);
             
            } else {
              console.log("Password comparison failed for user:", user.name);
              res.json('The Password is incorrect');
            }
          });
        } else {
          console.log("User not found:", name);
          res.json('the user does not exist');
        }
      })
      .catch(err => {
        console.error("Database error:", err);
        res.status(500).json('Internal Server Error');
      });
  });
  


// Protected route
app.post('/protected-route', verifyToken, (req, res) => {
    res.json({ message: 'Authorized' });
});

// Register endpoint
app.post('/Register', async (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UsersModel.create({ name, email, password: hash })
                .then(Users => res.json(Users))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message));
});


//log out
app.post('/Logout', (req, res) => {
    // Clear the token cookie
    res.clearCookie('token');
    // Respond with success message
    res.json({ success: true });
    console.log('logged out');
});

app.listen(3001, () => {
    console.log("Server is running ")
});

