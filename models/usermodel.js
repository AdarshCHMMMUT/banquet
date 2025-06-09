import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  role: { type: String, enum: ['subadmin', 'admin', 'manager'], default: 'subadmin' },
  password: { type: String, required: true }
});
const userModel =  mongoose.models.user || mongoose.model('users',userSchema);

export default userModel;
