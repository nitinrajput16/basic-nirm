const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
});

RoleSchema.methods.hasPermission = function (permission) {
    return this.permissions.indexOf(permission) !== -1;
}

module.exports = new mongoose.model("Role", RoleSchema);
