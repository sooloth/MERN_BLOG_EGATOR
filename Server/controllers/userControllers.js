const User = require('../models/userModel')
const HttpError = require('../models/errorModel')
const bcrypt = require('bcryptjs')


/////////////// Register a new user
//POST: api/users/register
//UNPROTECTED
const registerUser = async (req, res, next) => {
    try {
        const {name, email, password, password2} = req.body;
        if(!name || !email || !password) {
            return next(new HttpError("Fill in all fields.", 422))
        }

        const newEmail = email.toLowerCase()

        const emailExists = await User.findOne({ email: newEmail})
        if(emailExists) {
            return next(new HttpError("Email already exists", 422))
        }
        if((password.trim()).length < 8) {
            return next(new HttpError("Password should be at least 8 characters", 422))
        }
        if(password != password2) {
            return next(new HttpError("Password do not match", 422))
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        const newUser = await User.create({name, email: newEmail, password: hashedPass})
        res.status(201).json(`New User ${newUser.email} registered`)
    } catch (error) {
        return next(new HttpError(error.message, 422))
    }
}







/////////////// Login user
//POST: api/users/login
//UNPROTECTED
const loginUser = async (req, res, next) => {
    res.json("Login User")
}






/////////////// User Profile
//POST: api/users/:id
//PROTECTED
const getUser = async (req, res, next) => {
    res.json("User Profile")
}





/////////////// Change user avatar (profile picture)
//POST: api/users/change-avatar
//PROTECTED
const changeAvatar = async (req, res, next) => {
    res.json("Change User Avatar")
}






/////////////// Edit user details (from profile)
//POST: api/users/edit-user
//PROTECTED
const editUser = async (req, res, next) => {
    res.json("Edit user details")
}







/////////////// Get Authors
//POST: api/users/authors
//UNPROTECTED
const getAuthors = async (req, res, next) => {
    res.json("Get all users/authors")
}





module.exports = {
    registerUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors
}