const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    posts: {type: Number, default: 0},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true}

},
{timestamps: true}
)

module.exports = model('User', userSchema)
