import { PrismaClient, Patients } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Patients): Promise<Patients> => {
  const result = await prisma.patients.create({ data });
  return result;
};

const getPatients = async (searchTerm: any) => {
  if (searchTerm === undefined) {
    const result = await prisma.patients.findMany({});
    return result;
  } else {
    const result = await prisma.patients.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            address: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            bloodGroup: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            healthStatus: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return result;
  }
};
const getSinglePatient = async (phone: string) => {
  const result = await prisma.patients.findUnique({
    where: {
      phone,
    },
  });
  //   const result = await prisma.$queryRaw`select * from donors`;
  return result;
};
export const PatientsService = {
  insertIntoDB,
  getPatients,
  getSinglePatient,
};
