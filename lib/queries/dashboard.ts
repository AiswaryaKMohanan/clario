import { prisma } from "@/lib/prisma"; // adjust the import path as needed

export default async function getApplicationStatus(userId:number){

    const [applied, interviews, offers, rejected] = await Promise.all([
    prisma.jobApplication.count({
      where: { userId, status: "APPLIED" },
    }),
    prisma.jobApplication.count({
      where: { userId, status: "INTERVIEW" },
    }),
    prisma.jobApplication.count({
      where: { userId, status: "OFFER" },
    }),
    prisma.jobApplication.count({
      where: { userId, status: "REJECTED" },
    }),
  ]);
console.log(applied, interviews, offers, rejected);

    return { applied, interviews, offers, rejected };


}