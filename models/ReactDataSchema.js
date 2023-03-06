
const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    know: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    like: {
        type: String,
        required: true
    },
    recommend: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    }
    

});

const User = mongoose.model('User', ReactFormDataSchema);


module.exports = User;