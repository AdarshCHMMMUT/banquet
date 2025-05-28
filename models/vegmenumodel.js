import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});

const MenuCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [MenuItemSchema]
}, { collection: 'vegmenu' });

const Vegmenumodel = mongoose.models.vegmenu || mongoose.model('vegmenu', MenuCategorySchema);

export default Vegmenumodel;


