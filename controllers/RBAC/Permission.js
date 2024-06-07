const express = require('express');
const router = express.Router();

const Permission = require("../../models/RBAC/Permission");

router.post('/add', async(req, res) => {
    res.json(await Permission.create(req.body));
});


module.exports = router;