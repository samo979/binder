const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    classes: [{ 
        name: {
            type: String,
            required: true
        },
        inGroup: {
            type: Boolean,
            required: true
        },
    }]
})

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;