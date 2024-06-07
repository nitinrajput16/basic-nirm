const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    endpoints: [{
        type: Schema.Types.ObjectId,
        ref: 'Endpoint'
    }]
});

module.exports = new mongoose.model("Permission", PermissionSchema);
