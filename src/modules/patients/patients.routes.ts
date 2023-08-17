import express from "express";
import { PatientsController } from "./patients.controller";
const router = express.Router();

router
  .get("/:phone", PatientsController.getSinglePatient)
  .get("/", PatientsController.getPatients)
  .post("/create-patient", PatientsController.insertIntoDB);
export const PatientsRoutes = router;
