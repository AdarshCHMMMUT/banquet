import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});

const MenuCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [MenuItemSchema]
});

const vegMenuCategory = mongoose.model('menucategory', MenuCategorySchema);

export default vegMenuCategory;
