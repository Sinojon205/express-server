var express = require('express');
var router = express.Router();
const serverSchema = require('../models/Server');
const auth = require('./authenticate');
const response = require('./response');
const ping = require('ping');
router.get("/list", auth.authenticateToken, async (req, res) => {
    try {
        const servers = await serverSchema.find();
        res.json(response(servers))
    } catch (err) {
        res.sendStatus(401).json({"error_message": err});
    }
});
router.get("/ping/:ipAddress", auth.authenticateToken, async (req, res) => {
    try {
        const ip = req.params.ipAddress;
        const server = await serverSchema.findOne({ipAddress: ip});
        ping.sys.probe(ip, async function (isAlive) {
            server.status = isAlive ? 'SERVER_UP' : 'SERVER_DOWN';
            console.log(isAlive);
            await serverSchema.updateOne({_id: server._id}, server);
            res.json(response([], server))
        });


    } catch (err) {
        res.sendStatus(401).json({"error_message": err});
    }
});
router.get("/get/:id", auth.authenticateToken, async (req, res) => {
    try {
        const server = await serverSchema.findOne({_id: req.params.id});
        res.json(response([], server))
    } catch (err) {
        res.sendStatus(401).json({"error_message": err});
    }
});

function getImgUrl() {
    const imageNames = ["server1.png", "server2.png", "server3.png", "server4.png"];
    return imageNames[Math.min(3, Math.random() * 4 | 0)];
}

router.post("/save", auth.authenticateToken, async (req, res) => {
    try {
        const server = new serverSchema(req.body);
        server.imgUrl = getImgUrl()
        const savedPost = await server.save();
        res.json(response([], savedPost));
    } catch (err) {
        res.sendStatus(401).json({"error_message": err});
    }
})
router.put("/put/:id", auth.authenticateToken, async (req, res) => {
    try {
        const server = await serverSchema.findByIdAndUpdate(req.params.id, req.body);
        res.json(response([], server))
    } catch (err) {
        res.sendStatus(401).json({"error_message": err});
    }
})


module.exports = router;
