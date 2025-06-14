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
  moistureAvg: {
    type: [Number],
    required: true,
    default: Array(25).fill(0), // 0 to 24 hours
  },
  temperatureAvg: {
    type: [Number],
    required: true,
    default: Array(25).fill(0),
  },
  humidityAvg: {
    type: [Number],
    required: true,
    default: Array(25).fill(0),
  },
});

const DataTable = mongoose.model("data", dataSchema);

export default DataTable;
