var express = require('express');
const {use} = require("express/lib/router");
var jwt = require('jsonwebtoken');

var router = express.Router();
const userModel = require('../models/User');
const auth = require('./authenticate');

/* GET users listing. */

function generateAccessToken(username) {
    return jwt.sign({username}, "secret", {expiresIn: '180s'})
}


router.post('/api/login', async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    const user = await userModel.findOne({username, password}).exec();
    if (!user) {
        res.sendStatus(403).json({error_message: "wrong username or password"})
    }
    const refresh_token = generateAccessToken(username)
    const access_token = jwt.sign({username}, "secret");


    res.json({refresh_token, access_token})
});

router.get('/all', auth.authenticateToken, async (req, res, next) => {
    try {
        const users = await userModel.find().exec();
        res.json(users);
    } catch (err) {
        res.json({error_message: err})
    }
});

router.post('/save/user', auth.authenticateToken, async (req, res, next) => {
    res.send('respond with a resource');
});

router.post('/save/role', auth.authenticateToken, async (req, res, next) => {
    res.send('respond with a resource');
});

router.post('/save/addtouser', auth.authenticateToken, async (req, res, next) => {
    res.send('respond with a resource');
});

router.post('/token/refresh', auth.authenticateToken, async (req, res, next) => {
    const refresh_token = req.headers.authorization
    if (!refresh_token && !refresh_token.startsWith("Bearer ")) {
        return res.sendStatus(403).json({"error_message": "No credentials sent!"})
    }
    jwt.verify(refresh_token, "secret", (err, user) => {
        if (err) {
            return res.sendStatus(403).json({"error_message": "No credentials sent!"})
        }

        user

        res.json({refresh_token, access_token})
    })
});

module.exports = router;
