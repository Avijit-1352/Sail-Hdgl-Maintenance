const User = require('../models/User')
const Breakdow = require('../models/Breakdow') 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret,jwtExpire}=require('../config/keys.js')

exports.signupController=async(req,res)=>{
   console.log(req.body);
   const{username, userid, password,role}=req.body;
   try {
    const user = await User.findOne({userid: userid});
    if(user){
        return res.status(400).json({errorMessage:'userid already exists',});
    }
    const  newUser = new User();
    newUser.username = username;
    newUser.userid = userid;
   
    
    const salt=await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    newUser.role = role;
    await newUser.save();
    res.json({
        successMessage:'Registration success, please signin.',
    });

   } catch (error) {
    console.log(error);
    res.status(500).json({errorMessage: 'Server error',});
   }
}

exports.signinController=async(req,res)=>{
   const{userid, password}=req.body;
   try {
     const user = await User.findOne({userid});
     if(!user){
        return res.status(400).json({
            errorMessage:'Invalid Ecredentials',
        })
     }
     const isMatch = await bcrypt.compare(password, user.password);
     if(!isMatch){
        return res.status(400).json({
            errorMessage:'Invalid the credentials',
        })
     }
     const payload={
        user:{
            _id: user._id,
        },
     }
     await jwt.sign(payload,jwtSecret,{expiresIn:jwtExpire},(err,token) => {
        if (err)console.log('jwt error',err);
        const {_id,username,userid,role} = user;
        res.json({
            token,
            user:{_id,username,userid,role},
        })

     })
   } catch (error) {
    console.log('signinContriller error', error);
    res.status(500).json({errorMessage: 'Server error',});
   }
    
 }



 exports.breakController=async(req,res)=>{
    console.log(req.body);
    const{username,equipment, remark}=req.body;
    try {
    //  const user = await User.findOne({userid: userid});
    //  if(user){
    //      return res.status(400).json({errorMessage:'userid already exists',});
    //  }
     const  newBreak = new Breakdow();
     newBreak.username = username;
     newBreak.equipment = equipment;
     newBreak.remark = remark;
     await newBreak.save();
     res.json({
         successMessage:'success data store',
     });
 
    } catch (error) {
     console.log(error);
     res.status(500).json({errorMessage: 'Server error',});
    }
 }