const express = require('express');
const router = express.Router();

const CollegeLogin = require("../../models/RBAC/CollegeLogin");

router.post('/add', async(req, res) => {
    res.json(await CollegeLogin.create(req.body));
})


module.exports = router;