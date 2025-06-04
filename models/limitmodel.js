
import mongoose from 'mongoose';

const selectionLimitSchema = new mongoose.Schema({
  ratePlan: { type: String, required: true }, // e.g., "Silver Rate Plan"
  vegNonVeg: { type: String, enum: ['Veg', 'Non-Veg'], required: true },
  limits: {
    type: Map,
    of: Number,
    required: true,
  },
});

export const SelectionLimit = mongoose.model('limits', selectionLimitSchema);