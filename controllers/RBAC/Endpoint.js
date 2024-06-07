const express = require('express');
const router = express.Router();

const Endpoint = require("../../models/RBAC/Endpoint");

router.post('/add', async(req, res) => {
    res.json(await Endpoint.create(req.body));
})



module.exports = router;