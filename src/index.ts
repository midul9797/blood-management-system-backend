import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running");
});
