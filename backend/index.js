import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccountPath = join(__dirname, "serviceAccountKey.json");
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

const app = express();
const port = 8000;  // <-- Changed from 3000 to 4000

app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://growsense-51fc4-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

const db = admin.database();

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/data", async (req, res) => {
  try {
    const snapshot = await db.ref("/").once("value");
    const value = snapshot.val();

    res.json({
      sensor: {
        temperature: value.sensor?.temperature ?? null,
        humidity: value.sensor?.humidity ?? null,
        moisture: value.sensor?.moisture ?? null,
      },
      control: {
        mode: value.control?.mode ?? "MANUAL",
        pump: value.control?.pump ?? "OFF",
      },
      status: {
        lastSeen: value.status?.lastSeen ?? 0,
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/control", async (req, res) => {
  try {
    const { mode, pump } = req.body;
    if (mode) {
      await db.ref("control/mode").set(mode);
    }
    if (pump) {
      await db.ref("control/pump").set(pump);
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error updating control:", error);
    res.status(500).json({ error: "Failed to update control" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});