const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
});

RoleSchema.methods.hasPermission = function (permission) {
    return mongoose.Model("Role").findOne({ permission });
}

module.exports = new mongoose.model("Role", RoleSchema);
