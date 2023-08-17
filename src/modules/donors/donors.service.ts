import { PrismaClient, Donors } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Donors): Promise<Donors> => {
  const result = await prisma.donors.create({ data });
  return result;
};

const getDonors = async (searchTerm: any) => {
  if (searchTerm === undefined) {
    const result = await prisma.donors.findMany({});
    return result;
  } else {
    const result = await prisma.donors.findMany({
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
  //   const result = await prisma.$queryRaw`select * from donors`;
};

const getSingleDonor = async (phone: string) => {
  const result = await prisma.donors.findUnique({
    where: {
      phone,
    },
  });
  //   const result = await prisma.$queryRaw`select * from donors`;
  return result;
};
export const DonorsService = {
  insertIntoDB,
  getDonors,
  getSingleDonor,
};
