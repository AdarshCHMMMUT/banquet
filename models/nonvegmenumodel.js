import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});

const MenuCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [MenuItemSchema]
},{ collection: 'nonvegmenu' });

const Nonvegmodel = mongoose.model('nonvegmenucategory', MenuCategorySchema);

export default Nonvegmodel;
