// models/booking.js
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  hall_name: {type: String},
  whatsapp_no: {type: String,required: true},
  email: {type: String,required: true},
  guest_name: {type: String,required: true},
  mobile_no: {type: Number},
  no_of_packs: {type: Number,required: true},
  rate_plan: {type: String,enum: ['Silver Rate Plan', 'Gold Rate Plan', 'Platinum Rate Plan'],required: true},
  rate_per_pack: {type: Number, required: true  },
  total_payment: { type: Number, required: true},
  advance_payment: {type: Number,required: true},
  balance: {type: Number, required: true},
  veg_non_veg: {type: String,enum: ['Veg', 'Non-Veg', 'Both'],required: true},
  menu_category: {type: String},
  menu_item: {type: String, required: true},
  notes: {type: String},
  status: {type: String,enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],default: 'Pending'},
  startDate: {type: Date,default: Date.now},
  endDate: {type: Date,default: Date.now}
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
