import express from "express";
import connectDB from "./connectDB.js";
import cors from "cors";
import { userController } from "./user/userController.js";
import { dataController } from "./data/dataController.js";
import { saveDataAverage } from "./data/dataController.js";

const app = express();
app.use(express.json());
app.use(cors());

await connectDB();

app.use(userController);
app.use(dataController);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

saveDataAverage();

setInterval(() => {
  saveDataAverage();
}, 30 * 1000);
