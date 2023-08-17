import express from "express";
import { RecordsController } from "./records.controller";
const router = express.Router();

router
  .get("/", RecordsController.getRecords)
  .post("/create-record", RecordsController.insertIntoDB);
export const RecordsRoutes = router;
