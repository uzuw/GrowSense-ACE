import { initializeApp, getApps, cert, ServiceAccount } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { Database } from "firebase-admin/lib/database/database";
import serviceAccountKey from "./serviceAccountKey.json";
import type { DataSnapshot, Reference } from "firebase-admin/database";

const app = !getApps().length
  ? initializeApp({
      credential: cert(serviceAccountKey as ServiceAccount),
      databaseURL:
        "https://growsense-51fc4-default-rtdb.asia-southeast1.firebasedatabase.app",
    })
  : getApps()[0];

const db: Database = getDatabase(app);


export interface SensorData {
  moisture: number;
  temperature: number;
  humidity: number;
}

export async function getDataFromFirebase(): Promise<SensorData> {
  try {
    const ref: Reference = db.ref("sensor");
    const snapshot: DataSnapshot = await ref.once("value");
    const data = snapshot.val() as Partial<SensorData> | null;

    if (!data) {
      throw new Error("No data found in Firebase");
    }

    return {
      moisture: data.moisture ?? 0,
      temperature: data.temperature ?? 0,
      humidity: data.humidity ?? 0,
    };
  } catch (error: any) {
    console.error("Error fetching data from Firebase:", error.message);
    return {
      moisture: 0,
      temperature: 0,
      humidity: 0,
    };
  }
}

export default getDataFromFirebase;
