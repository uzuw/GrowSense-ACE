import express from "express";
import DataTable from "./dataSchema.js";
import getDataFromFirebase from "./getDataFromFireBase.js";

const router = express.Router();

export const saveDataAverage = async () => {
  try {
    const now = new Date();
    const dateString = now.toISOString().split("T")[0];

    const data = await getDataFromFirebase();

    let doc = await DataTable.findOne({ dateOfData: dateString });

    if (!doc) {
      doc = new DataTable({
        dateOfData: dateString,
        tempValue: { moisture: 0, temperature: 0, humidity: 0 },
        sampleCount: 0,
        hourlyAverage: [],
      });
    }

    doc.tempValue.moisture += data.moisture;
    doc.tempValue.temperature += data.temperature;
    doc.tempValue.humidity += data.humidity;
    doc.sampleCount += 1;

    if (doc.sampleCount === 12) {
      const avg = {
        timestamp: now,
        moisture: doc.tempValue.moisture / 12,
        temperature: doc.tempValue.temperature / 12,
        humidity: doc.tempValue.humidity / 12,
      };

      doc.hourlyAverage.push(avg);

      doc.tempValue = { moisture: 0, temperature: 0, humidity: 0 };
      doc.sampleCount = 0;

      console.log(`Hourly average stored at ${now.toLocaleTimeString()}`);
    }

    await doc.save();
  } catch (err) {
    console.error("Error in saveDataAverage:", err);
  }
};

router.post("/data/get", async (req, res) => {
  const data = await getDataFromFirebase();

  if (!data) {
    return res.status(200).send({ message: "Data Doesn't Exist" });
  }
  return res.status(200).send({ message: "Data Sent Successfully" }, data);
});
