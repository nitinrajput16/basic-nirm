const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ApprovalStatus } = require("../config/strings").CollegeLogin;

const CollegeLoginSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        unique: true
    },
    role: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    college: {
        college: Schema.Types.ObjectId,
        required: true,
        ref: 'College'
    },
    approved: {
        type: String,
        enum: [
            ApprovalStatus.REJECTED,
            ApprovalStatus.APPROVED,
            ApprovalStatus.PENDING
        ],
        required: true
    },
    additonal_permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
});

CollegeLoginSchema.methods.hasPermission = function (permission) {
    return (this.permissions.indexOf(permission) !== -1);
}

module.exports = new mongoose.model("CollegeLogin", CollegeLoginSchema);
