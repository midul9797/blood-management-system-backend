import { Response, Request } from "express";
import { DonorsService } from "./donors.service";

const insertIntoDB = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = await DonorsService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Donor created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getDonors = async (req: Request, res: Response) => {
  try {
    const result = await DonorsService.getDonors(req.query.searchTerm);
    res.send({
      success: true,
      message: "Donors retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleDonor = async (req: Request, res: Response) => {
  try {
    const result = await DonorsService.getSingleDonor(req.params.phone);
    res.send({
      success: true,
      message: "Donor retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const DonorsController = {
  insertIntoDB,
  getDonors,
  getSingleDonor,
};
