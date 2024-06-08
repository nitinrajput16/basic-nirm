const express = require('express');
const router = express.Router();



const { checkPermission } = require("./RBAC/helper");

router.use(checkPermission);


module.exports = router;