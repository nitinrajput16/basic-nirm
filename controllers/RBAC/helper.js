
const CollegeLogin = require("../../models/CollegeLogin");
const Role = require("../../models/Role");
const User = require("../../models/User");

const checkPermission = async function(req, res, next) {
    
    let visitorPermCheck, loginPermCheck, collegePermCheck;


    visitorPermCheck = await Role.getVisitor().hasPermission({
        path: req.path
    });

    if (req.user) {
        loginPermCheck = await User.findById(req.user._id).hasPermission({
            path: req.path
        });
    }
    if (req.session?.collegeLogin) {
        collegePermCheck = await CollegeLogin.findById(req.session.collegeLogin).hasPermission({
            path: req.path
        });

    }
    if (visitorPermCheck || loginPermCheck || collegePermCheck) {
        return next();
    }

    return res.status(400).json({
        message: Errors.UNAUTHORIZED
    })
}

module.exports = {
    checkPermission
}