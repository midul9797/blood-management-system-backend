import express, { Application } from "express";
import cors from "cors";
import { DonorsRoutes } from "./modules/donors/donors.routes";
import { PatientsRoutes } from "./modules/patients/patients.routes";
import { RecordsRoutes } from "./modules/records/records.routes";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/donors", DonorsRoutes);
app.use("/api/v1/patients", PatientsRoutes);
app.use("/api/v1/records", RecordsRoutes);
export default app;
