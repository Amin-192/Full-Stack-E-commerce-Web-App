const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


const app = express();
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET", "POST"],
Credentials : true
}))
app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/NikeApp");

app.post('/Login', (req, res) => {
    const { name, password } = req.body;
    console.log("Login request:", name); // Log the login request
    
    UsersModel.findOne({ name: name })
        .then(user => {
           
            if (user) {
              
                bcrypt.compare(password, user.password, (err, response) => {
                    if (err) {
                        console.error("bcrypt error:", err);
                        res.status(500).json('Internal Server Error');
                    } else if (response) {
                       const token = jwt.sign({email: user.email}, "mysecretkey", {expiresIn:"20d"})
                       res.cookie('token', token)
                        res.json('success');
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



app.post('/Register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UsersModel.create({ name, email, password: hash })
                .then(Users => res.json(Users))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message));


})
app.listen(3001, () => {
    console.log("Server is running ")
})

app.post('/logout', (req, res) => {
    // Clear authentication state
    res.clearCookie('token'); // Clear the token cookie
    res.json('Logout successful');
});
