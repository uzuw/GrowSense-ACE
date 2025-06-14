const dataSchema = new mongoose.Schema({
  dateOfData: {
    type: String, 
    required: true,
  },
  sampleCount: {
    type: Number,
    default: 0,
  },
  tempValue: {
    type: {
      moisture: Number,
      temperature: Number,
      humidity: Number,
    },
    default: { moisture: 0, temperature: 0, humidity: 0 },
  },
  hourlyAverage: [
    {
      timestamp: Date, 
      moisture: Number,
      temperature: Number,
      humidity: Number,
    },
  ],
});

const DataTable = mongoose.model("data", dataSchema);

export default DataTable;
