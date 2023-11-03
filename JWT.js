/* //controllers
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

const register = asynd (req,res) =>{
    try {
        const {name,email,password} = req.body;
        const newUser = new User({name,email,password});

        //encryptar la password

        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();

        //token

        const token = jwt.sign({id:newUser._id},config.secret,{ expiresIn: 60});
        res.json({auth: true, token});

    } catch (error) {
        res.status(401).json({msg: error});
    }
} */


/* //controllers
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');


const register = async (res,req) => {
    try {
        const {email,nombre,password} = req.body;
        const newUser = new User({email,nombre,password});

        //encryptar
        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();

        //token

        const token = jwt.sign({id:newUser._id}, config.secret,{ expiresIn: 60});
        res.json({auth: true, token});

    } catch (error) {
        res.status(401).json(error);
    }
} */


//controllers

/* const User = require('../models/User');
const config = require('../config');
const jwt = require('jsonwebtoken');

const register = async (res,res) =>{
    try {
        const {email,name,password} = req.body;
        const newUser = new User({email,name,password});

        //encrypted
        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();

        //token

        const token = jwt.sign({id: newUser._id}, config.secret,{expiresIn: 60});
        res.json({auth: true, token});
    } catch (error) {
     res.status(401).json({error});   
    }
} */

/* 
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = requier('./config');

const register = async (res,req) => {
    try {
        const {email,name,password} = req.body;
        const newUser = new User({email,name,password});

        //encrypted

        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();

        //token
        const token = jwt.sign({id: newUser._id}, config.secret,{ expiresIn: 60});
        res.json({auth: true, token});
    } catch (error) {
        res.status(401).json({error});
    }
/* } */
/* 
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

const register = async (req,res) => {
    try {
        const {email,name,password} = req.body;
        const newUser = new User({email,name,password});

        //encrypted
        newUser.password = await newUser.encryptPassword(newUser.password);
        await newUser.save();

        //token
        const token = jwt.sign({id: newUser._id}, config.secret, { expiresIn: 60});
        res.json({auth: true, token});
    } catch (error) {
        res.status(401).json({error});   
    }
}; */ 


//login

/* const login = async (req,res) => {
    try {
        const {email,password} = req.body;

        //user
        const user = await User.findOne({email:email});

        if(!user){
            return res.status(404).send('Incorrect data');
        }
        //password

        const validPassword = await user.validatePassword(password);
        
        if(!validPassword){
            return res.status(404).send({auth:false,token: null});
        }

        //token

        const token = jwt.sign({id:user._id},config.secret,{ expiresIn: 60});
        res.json({data:token});
        
    } catch (error) {
        res.status(202).json({msg:error});
    }
} */

/* 
const login = async (req,res) =>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email:email});
        //user

        if(!user){
            res.status(404).send('incorrect Data');
        }

        //password

        const validPassword = await user.validatePassword(password);

        if(!validPassword){
            res.status(404).send('Incorrect Data');
        }

        //token

        const token = jwt.sign({user._id}, config.secret,{expiresIn: 60});
        res.json({auth:true, token});

    } catch (error) {
        res.status(202).json({msg:error});
    }
}

const user = await findOne({email:email});


const validPassword = await user.validatePassword(password);

const user = await findOne({email:email})

const validPassword = await user.validatePassword(password); */


//verifyToken

/* const jwt = require('jsonwebtoken');
const config = require('../config');

function verifiyToken(req,res,next){
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(202).json({auth:false, token: null});
    }
    const decode = jwt.verify(token, config.secret);
    req.userId = decode.id;
    next();
}
 */

/* const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req,res,next){
    const token = req.headers['x-access-token'];
    if(!token){
        res.status(401).json({auth:false});
    }
    const decode = jwt.verify(token, config.secret);
    req.userId = decode.id;
    next();
}

 */

/* const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(res,req,next){
    const token = req.headers['x-access-token'];
    if(!token){
        res.status(404).json({auth: false, token: null});
    }
    const decode = jwt.verify(token, config.secret);
    req.userId = decode.id 

}
 */

/* const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(){
    const token = headers['x-access-token'];
    if(!token){
        res.status(404).json({auth:false, token: null});
    } 
    const decode = jwt.verify(token,config.secret);
    req.userId = decode.id;
    next();
} */
/* 
const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(){
    const token = req.headers['x-access-token'];
    if(!token){
        res.status(404).json({auth:false,token:null});
    }
    const decode = jwt.verify(token, config.secret);
    req.userId = decode.id;
    next();
} */

//models/User


/* userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.gentSalt(10);
    return bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = function (password){
    return bcrypt.compare(password,this.password);
} */
/* 
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.gentSalt(10);
    return bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = function (password){
    return bcrypt.compare(password,this.password);
} */


/* userSchema.methods.encryptedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

userSchema.methods.validatePassword = function (password){
    return bcrypt.compare(password,this.password)
} */
/* 
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.gentSalt(10);
    return bcrypt.hash(password,salt);
}

userSchema.methods,validatePassword = function(password){
    return bcrypr.compare(password,this.password);

} */

/* userSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.gentSalt(10);
    return bcrypt.hash(password,salt);
}
userSchema.methods.validatePassword = function(password){
    return bcrytp.compare(password,this.password);
} */