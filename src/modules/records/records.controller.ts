import { Response, Request } from "express";
import { RecordsService } from "./records.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await RecordsService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Record created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getRecords = async (req: Request, res: Response) => {
  try {
    const result = await RecordsService.getRecords(req.query.searchTerm);
    res.send({
      success: true,
      message: "Records retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const RecordsController = {
  insertIntoDB,
  getRecords,
};
