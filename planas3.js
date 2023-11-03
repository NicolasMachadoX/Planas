//controllers  X
const User= require('../models/userJWT');
const jwt = require('jsonwebtoken');
const config = require('../config');


//register

const register = async (req,res) =>{
    try {
       const {name,password,email} = req.body;
       const newUser = new User({name,password,email});
       

        newUser.password = await newUser.encryptPassword(newUser.password)
        await newUser.save();

        const token = jwt.sign({id: newUser._id},config.secret,{
            expiresIn: 60*60*24
        })

        res.json({auth: true, token})
    } catch (error) {
        res.status(202).json({msg:error});
    }
}

//login

const login = async (req,res) => {
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email:email});
        
        if(!user){
            return res.status(404).send("The email doesn't exists");
        }

        const validPassword = await user.validatePassword(password);
        
        if(!validPassword){
            return res.status(401).json({auth: false, token: null});
        }

        const token = jwt.sign({id:user._id},config.secret,{
            expiresIn: 60*60*24
        })
         
        res.json({data:token});
        
    } catch (error) {
        res.status(202).json({msg:error});
    }
}












//verifiyToken.js

const jwt = require('jsonwebtoken');
const config = require('../config');

function verifiyToken(req,res,next){
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth:false,
            message: 'No token provided'
        });
    }
    const decode = jwt.verify(token, config.secret);
    req.userId = decode.id;
    next();
}


























// models/User

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.gentSalt(10);
    return bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = function (password){
    return bcrypt.compare(password,this.password);
}

