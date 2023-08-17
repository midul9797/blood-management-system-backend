import express from "express";
import { DonorsController } from "./donors.controller";
const router = express.Router();

router
  .get("/:phone", DonorsController.getSingleDonor)
  .get("/", DonorsController.getDonors)
  .post("/create-donor", DonorsController.insertIntoDB);
export const DonorsRoutes = router;
