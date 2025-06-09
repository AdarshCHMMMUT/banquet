import userModel from "../models/usermodel.js";
export const adminlogin = async(req,res)=>{
    const {phone, role, password} = req.body;
    console.log(req.body);
    if(!phone || !role || !password)
    {
        return res.json({success:false, message:'Missing Details'})
    }
    try{
    const user = await userModel.findOne({phone});
    if(!user){
        return res.json({success:false, message:'Invalid phone'})
    }
    if(user.password !== password){
        return res.json({success:false, message:'Invalid password'})
    }
    if(user.role !== role){
        return res.json({success:false, message:'Invalid role'})
    }
    return res.json({success:true});
    }
    catch(error)
    {
        return res.json({success:false, message:error.message})
    }
}


