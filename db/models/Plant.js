import mongoose from "mongoose";

const { Schema } = mongoose;

const plantSchema = new Schema({
  name: { type: String, required: true },
  botanicalName: { type: String, required: true },
  imageUrl: { type: String },
  waterNeed: { type: String },
  lightNeed: { type: String },
  fertiliserSeason: { type: Array },
  description: { type: String },
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantSchema);

export default Plant;
