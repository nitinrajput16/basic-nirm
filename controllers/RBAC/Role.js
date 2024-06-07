const express = require('express');
const router = express.Router();

const Role = require("../../models/RBAC/Role");

router.post('/add', async(req, res) => {
    res.json(await Role.create(req.body));
})

module.exports = router;