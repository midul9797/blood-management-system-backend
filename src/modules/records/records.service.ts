import { PrismaClient, Record } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Record): Promise<Record> => {
  const result = await prisma.record.create({
    data,
    include: { donor: true, patient: true },
  });
  return result;
};

const getRecords = async (searchTerm: any) => {
  if (searchTerm === undefined) {
    const result = await prisma.record.findMany({
      include: {
        donor: true,
        patient: true,
      },
    });
    //   const result = await prisma.$queryRaw`select * from Records`;
    return result;
  } else {
    const result = await prisma.record.findMany({
      where: {
        OR: [
          {
            donor: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            donor: {
              phone: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            donor: {
              bloodGroup: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            patient: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            patient: {
              phone: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            patient: {
              bloodGroup: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        donor: true,
        patient: true,
      },
    });
    return result;
  }
};
export const RecordsService = {
  insertIntoDB,
  getRecords,
};
