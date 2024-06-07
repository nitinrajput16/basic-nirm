const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EndpointSchema = new Schema({
    path: {
        type:String,
        required:true
    }
});

module.exports = new mongoose.model("Endpoint", EndpointSchema);
