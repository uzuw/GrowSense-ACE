import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  dateOfData: {
    type: Date, 
    required: true,
  },
  sampleCount: {
    type: Number,
    default: 0,
  },
  tempValue: {
    type: {
      moisture: { type: Number, default: 0 },
      temperature: { type: Number, default: 0 },
      humidity: { type: Number, default: 0 },
    },
    default: () => ({ moisture: 0, temperature: 0, humidity: 0 }), 
  },
  hourlyAverage: [
    {
      timestamp: { type: Date, required: true },
      moisture: { type: Number, required: true },
      temperature: { type: Number, required: true },
      humidity: { type: Number, required: true },
    },
  ],
});

const DataTable = mongoose.model("data", dataSchema);

export default DataTable;
