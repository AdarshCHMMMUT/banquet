import Nonvegmodel from "../models/nonvegmenumodel.js";
import userModel from "../models/usermodel.js";
import Vegmenumodel from "../models/vegmenumodel.js";
import Booking from "../models/bookingmodel.js";
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

export const getvegMenu = async(req,res) =>
 {
  try{
      const vegMenu = await Vegmenumodel.find();
      res.json({success:true, vegMenu:vegMenu});
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }

 export const getNonvegMenu = async(req,res) =>
 {
  try{
      const nonvegMenu = await Nonvegmodel.find();
      res.json({success:true, nonvegMenu:nonvegMenu});
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }

 export const addvegmenu = async(req,res) =>
 {    
  try{
      const {category,name,image} = req.body;
      console.log(req.body);
      if(!category)
      {
        return res.json({success:false, message: 'category, name and image are required'});
      }
      const items = [{name,image}];
      const existingVegMenu = await Vegmenumodel.findOne({ category });
      if(existingVegMenu)
      {
        existingVegMenu.items.push({name,image});
        await existingVegMenu.save();
        return res.json({success:true, message: 'Veg menu updated successfully'});
      }
      else
      {
        const newVegMenu = new Vegmenumodel({
          category,
          items
        });
        await newVegMenu.save();
        return res.json({success:true, message: 'Veg menu added successfully'});
      }   
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }
 export const addnonvegmenu = async(req, res) =>
 {
  try{
      const {category,name,image} = req.body;
      console.log(req.body);
      if(!category || !name || !image)
      {
        return res.json({success:false, message: 'category, name and image are required'});
      }
      const items = [{name, image}];
      const existingNonvegMenu = await Nonvegmodel.findOne({ category });
      if(existingNonvegMenu)
      {
        existingNonvegMenu.items.push({name, image});
        await existingNonvegMenu.save();
        return res.json({success:true, message: 'Nonveg menu updated successfully'});
      }
      else
      {
        const newNonvegMenu = new Nonvegmodel({
          category,
          items
        });
        await newNonvegMenu.save();
        return res.json({success:true, message: 'Nonveg menu added successfully'});
      }
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }

 export const updatecategorynameinveg  = async(req, res) =>
 {
  try{
      const {id, newCategory} = req.body;
      if(!id || !newCategory)
      {
        return res.json({success:false, message: 'category and newCategory are required'});
      }
      const existingVegMenu = await Vegmenumodel.findById(id);
      if(existingVegMenu)
      {
        existingVegMenu.category = newCategory;
        await existingVegMenu.save();
        return res.json({success:true, message: 'Veg menu category updated successfully'});
      }
      else
      {
        return res.json({success:false, message: 'Veg menu category not found'});
      }
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }
 export const deletevegcategory = async(req, res) => 
 {
  try{
      const {id} = req.body;
      if(!id)
      {
        return res.json({success:false, message: 'Category ID is required'});
      }
      const existingVegMenu = await Vegmenumodel.findById(id);
      if(existingVegMenu)
      {
        await Vegmenumodel.deleteOne({_id:id});
        return res.json({success:true, message: 'Veg menu category deleted successfully'});
      }
      else
      {
        return res.json({success:false, message: 'Veg menu category not found'});
      }
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }

 export const deletenonvegcategory = async(req, res) =>
 {
  try{
      const {id} = req.body;
      if(!id)
      {
        return res.json({success:false, message: 'Category ID is required'});
      }
      const existingNonvegMenu = await Nonvegmodel.findById(id);
      if(existingNonvegMenu)
      {
        await Nonvegmodel.deleteOne({_id:id});
        return res.json({success:true, message: 'Nonveg menu category deleted successfully'});
      }
      else
      {
        return res.json({success:false, message: 'Nonveg menu category not found'});
      }
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }
 
 export const updatecategorynameinnonveg  = async(req, res) =>
 {
  try{
      const {category, newCategory} = req.body;
      if(!category || !newCategory)
      {
        return res.json({success:false, message: 'category and newCategory are required'});
      }
      const existingNonvegMenu = await Nonvegmodel.findOne({ category });
      if(existingNonvegMenu)
      {
        existingNonvegMenu.category = newCategory;
        await existingNonvegMenu.save();
        return res.json({success:true, message: 'Nonveg menu category updated successfully'});
      }
      else
      {
        return res.json({success:false, message: 'Nonveg menu category not found'});
      }
  }
  catch(error)
  {
    return res.json({success:false, message: error.message});
  }
 }

 

export const bookHall = async (req, res) => {
  try {
    const {
      guest_name,
      email,
      whatsapp_no,
      mobile_no,
      no_of_packs,
      rate_plan,
      veg_non_veg,
      advance_payment,
      total_payment,
      balance,
      items,
      notes,
      hall_name = "Default Hall",      
      menu_category = "Default Menu",  
      rate_per_pack = total_payment / no_of_packs,
      startDate,
      endDate 
    } = req.body;

    console.log(req.body);
    const booking = new Booking({
      guest_name,
      email,
      whatsapp_no,
      mobile_no,
      no_of_packs,
      rate_plan,
      veg_non_veg,
      advance_payment,
      total_payment,
      balance,
      menu_item : Object.values(items).flat().join(', '),
      notes,
      hall_name,
      menu_category,
      rate_per_pack,
      startDate:startDate,
      endDate:endDate
    });

    await booking.save();

    return res.json({ success: true, message: "Booking created successfully", data: booking });

  } catch (error) {
    return res.json({ success: false, message: error.message, items: req.body.items });
  }
};

export const editvegmenuitemnames = async (req,res) => {  
  try {
     const {category,name, newItemName, newItemImage} = req.body;
      if(!category || !name || !newItemName || !newItemImage)
      {
        return res.json({success:false, message: 'category, name, newItemName and newItemImage are required'});
      }
      const existingVegMenu = await Vegmenumodel.findOne({ category:category,items: { $elemMatch: { name: name } } });
      if(existingVegMenu)
      {
        const itemIndex = existingVegMenu.items.findIndex(item => item.name === name);
        if(itemIndex !== -1)
        {
          existingVegMenu.items[itemIndex].name = newItemName;
          existingVegMenu.items[itemIndex].image = newItemImage;
          await existingVegMenu.save();
          return res.json({success:true, message: 'Veg menu item updated successfully'});
        }
        else
        {
          return res.json({success:false, message: 'Item not found in the category'});
        }
      }
      else
      {
        return res.json({success:false, message: 'Category not found'});
      }
     

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export const editnonvegmenuitemnames = async (req, res) => {
  try {
     const {category,name, newItemName, newItemImage} = req.body;
      if(!category || !name || !newItemName || !newItemImage)
      {
        return res.json({success:false, message: 'category, name, newItemName and newItemImage are required'});
      }
      const existingNonvegMenu = await Nonvegmodel.findOne({ category:category, items: { $elemMatch: { name: name } } });
      if(existingNonvegMenu)
      {
        const itemIndex = existingNonvegMenu.items.findIndex(item => item.name === name);
        if(itemIndex !== -1)
        {
          existingNonvegMenu.items[itemIndex].name = newItemName;
          existingNonvegMenu.items[itemIndex].image = newItemImage;
          await existingNonvegMenu.save();
          return res.json({success:true, message: 'Nonveg menu item updated successfully'});
        }
        else
        {
          return res.json({success:false, message: 'Item not found in the category'});
        }
      }
      else
      {
        return res.json({success:false, message: 'Category not found'});
      }


  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
 