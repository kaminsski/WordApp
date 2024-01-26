const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const validator = require('validator');
const { UserModel } = require('../models/User');

const createToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:"30d"})
}

const register = async(req,res) =>{
    try {
        const {username, password, email} = req.body
        const hashed = await bcrypt.hash(password,10)
        if (!validator.isLength(username, { min: 3 })) {
            return res.status(400).json({ message: 'Username must be at least 3 characters long' });
          }
      
          // Validate email
          if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Please enter a valid email address' });
          }
      
          // Validate password
          if (!validator.isLength(password, { min: 6 })) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
          }
        const response = await UserModel.create({
            username,
            password:hashed,
            email
        })
       

        if(response){
            res.json({
                _id:response._id,
                username,
                email,
                token:createToken(response._id)
                
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const login = async(req,res) =>{
    try {
        const {username,password}= req.body
        const user = await UserModel.findOne({username})
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        const compare = await bcrypt.compare(password,user.password)
        if(!compare){
             return res.status(404).json({
                message:"Password did not match"
            })
        }
        if(user && compare){
            res.status(200).json({
                _id:user.id,
                username:user.username,
                email:user.email,
                token: createToken(user._id),
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllUsers =async (req,res) =>{
    try {
        const response = await UserModel.find()
        if(response){
            res.json({
                users:response
            })
        }
    } catch (error) {
        
    }
}

const getUser = async(req,res) =>{
    try {
    const userId = req.params.id
    const response = await UserModel.findById(userId)
    if(response){
        res.json({
            user:response
        })
    }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    register,
    login
}