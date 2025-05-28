import userModel from "../models/usermodel.js";
export const getUserData = async(req,res) =>
{
  try{
      console.log(req.body);
       if(!req.body.userId)
       {
         return res.json({success:false, message: 'User ID is required'});
       }
       const {userId}  = req.body;
       const user  = await userModel.findById(userId);
       if(!user)return res.json({success:false, message: 'Invalid otp'});
    

        res.json({success:true,
        userData:{
            name: user.name,
            isAccountVerified: user.isAccountVerified
        }
       });

  }
  catch(error)
  {
    return res.json({success:false, message: 'Invalid otp'});

  }
}

// export const addvegitem = async(req,res) =>
// {
//   try{
//     const {name, categoy, image} = req.body;
//     if(!name || !categoy || !image)
//     {
//       return res.json({success:false, message:'All fields are required'});
//     }
//     const newItem = new vegitemModel({
//       name,
//       categoy,
//       image
//     });
//     await newItem.save();
//     res.json({success:true, message:'Veg item added successfully', item: newItem});
//   }
//   catch(error)
//   {
//     return res.json({success:false, message:error.message});
//   }
// }

// export const addnonvegitem = async(req,res) => 
// {
//   try{
//     const {name, categoy, image} = req.body;
//     if(!name || !categoy || !image)
//     {
//       return res.json({success:false, message:'All fields are required'});
//     }
//     const newItem = new nonvegitemModel({
//       name,
//       categoy,
//       image
//     });
//     await newItem.save();
//     res.json({success:true, message:'Non veg item added successfully', item: newItem});
//   }
//   catch(error)
//   {
//     return res.json({success:false, message:error.message});
//   }

// }
// export const addvegcategory = async(req,res) =>
// {
//   try{
//     const {name} = req.body;
//     if(!name)
//     {
//       return res.json({success:false, message:'All fields are required'});
//     }
//     const newCategory = new vegcategoryModel({
//       name
//     });
//     await newCategory.save();
//     res.json({success:true, message:'Veg category added successfully', category: newCategory});
//   }
//   catch(error)
//   {
//     return res.json({success:false, message:error.message});
//   }
// }
// export const addnonvegcategory = async(req, res) =>
// {
//   try{
//     const {name} = req.body;
//     if(!name)
//     {
//       return res.json({success:false, message:'All fields are required'});
//     }
//     const newCategory = new nonvegcategoryModel({
//       name
//     });
//     await newCategory.save();
//     res.json({success:true, message:'Non veg category added successfully', category: newCategory});
//   }
//   catch(error)
//   {
//     return res.json({success:false, message:error.message});
//   }
// }