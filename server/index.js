const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users');



const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/NikeApp");

app.post('/Login', (req, res) => {
    const { name, password } = req.body;
    UsersModel.findOne({ name: name, password: password })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('success');
                } else {
                    res.json('the password is incorrect');
                }
            } else {
                res.json('the user does not exist');
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/Register', (req, res) => {
    UsersModel.create(req.body)
        .then(Users => res.json(Users))
        .catch(err => res.json(err))

})
app.listen(3001, () => {
    console.log("Server is running ")
})
