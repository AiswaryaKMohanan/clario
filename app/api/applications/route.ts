import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: Request) {
const cookieStore = await cookies();
const token = cookieStore.get("token")?.value;

  if (!token) return new Response("Unauthorized", { status: 401 });

  // Decode JWT
  const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

  const body = await req.json();


    const response = await prisma?.jobApplication.create({
data: {
      company: body.company,
      position: body.position,
      status: 'APPLIED',
      userId: decoded.id
    },
    });
    console.log(response,req);
    
  return Response.json(response, { status: 201 });
}