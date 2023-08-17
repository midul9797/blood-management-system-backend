import { Response, Request } from "express";
import { PatientsService } from "./patients.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PatientsService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Donor created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getPatients = async (req: Request, res: Response) => {
  try {
    const result = await PatientsService.getPatients(req.query.searchTerm);
    res.send({
      success: true,
      message: "Patients retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSinglePatient = async (req: Request, res: Response) => {
  try {
    const result = await PatientsService.getSinglePatient(req.params.phone);
    res.send({
      success: true,
      message: "Patient retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const PatientsController = {
  insertIntoDB,
  getPatients,
  getSinglePatient,
};
