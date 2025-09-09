import User from "../models/user_model.js";

export const create=async(req,res)=>{
try{
let {name,age,email,username}=req.body
const newUser=await User.create({
  name,
  age,
  email,
  username
})
res.status(201).json({message:"User Created"})
console.log(newUser)
}
catch(error){
res.status(400).json({message:error})
}
}

export const read=async(req,res)=>{
  try{
    const users=await User.find();
    res.status(200).json(users);
  }
  catch(error){
    res.status(400).json({message:"User not found"})
  }
}

export const readuserName=async(req,res)=>{
  try{
    const users=await User.findOne({username:req.params.username});
    res.status(200).json(users);
  }
  catch(error){
    res.status(400).json({message:"User not found"})
  }
}

export const updateId=async(req,res)=>{
  try{
    const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedUser);  
  }
  catch(error){
    res.status(400).json({message:"User not found"})
  }
}

export const updateEmail=async(req,res)=>{
  try{
    const updatedUser=await User.updateOne({email:req.body.email},req.body,{new:true});
    res.status(200).json(updatedUser);  
  }
  catch(error){
    res.status(400).json({message:"User not found"})
  }
}

export const deleteId=async(req,res)=>{
  try{
    const deletedUser=await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  }
  catch(error){
    res.status(400).json({message:"User not found"})
  }
}

export const deleteEmail=async(req,res)=>{
  try{
    const deletedUser=await User.deleteOne({email:req.body.email},{new:true});
    res.status(200).json(deletedUser);
  }
  catch(error){
    res.status(400).json({message:"User not found"})
  }
}