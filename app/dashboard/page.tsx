import getApplicationStatus from "@/lib/queries/dashboard";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function DashboardPage() {
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const cookieStore = await cookies();
const token = cookieStore.get("token")?.value;

  if (!token) return new Response("Unauthorized", { status: 401 });

  const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

 const userId = decoded.id;

  const appliactionStatus = await getApplicationStatus(userId);
  

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-[#0d0df1]">
        Dashboard Overview 📊
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow text-blue-600">
          <h2 className="text-lg font-semibold">Total Applications</h2>
          <p className="text-2xl font-bold mt-2">{appliactionStatus.applied}</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold  text-blue-400">Interviews Scheduled</h2>
          <p className="text-2xl font-bold mt-2">{appliactionStatus.interviews}</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow  text-blue-400">
          <h2 className="text-lg font-semibold  text-blue-400">Offers Received</h2>
          <p className="text-2xl font-bold mt-2">{appliactionStatus.offers}</p>
        </div>
      </div>
    </div>
  );
}
