import express from "express";
import DataTable from "./dataSchema.js";
import getDataFromFirebase from "./getDataFromFireBase.js";

const router = express.Router();

export const saveDataAverage = async () => {
  try {
    const now = new Date();

    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const data = await getDataFromFirebase();
    console.log("data from web", data);

    let doc = await DataTable.findOne({ dateOfData: startOfToday });

    if (!doc) {
      doc = new DataTable({ dateOfData: startOfToday });
      doc.tempValue = { moisture: 0, temperature: 0, humidity: 0 };
      doc.sampleCount = 0;
      doc.hourlyAverage = [];
    }

    doc.tempValue.moisture += data.moisture;
    doc.tempValue.temperature += data.temperature;
    doc.tempValue.humidity += data.humidity;
    doc.sampleCount += 1;

    console.log(
      `sample= ${doc.sampleCount} \n moisture= ${doc.tempValue.moisture} \n temperature= ${doc.tempValue.temperature} \n humidity= ${doc.tempValue.humidity}`
    );

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

router.get("/data/get", async (req, res) => {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  let doc = await DataTable.findOne({ dateOfData: startOfToday });

  if (!doc) {
    return res.status(200).send({ message: "Data Doesn't Exist" });
  }
  return res.status(200).json({ message: "Data Sent Successfully", data: doc });
});
