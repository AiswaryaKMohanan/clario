import Link from "next/link";
import Header from "../components/header/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Header */}
      <header className="flex items-end justify-between p-4 bg-gray-100 border-b border-gray-300 shadow-sm">
        <Header />
      </header>

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1 flex-row">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-6 flex-shrink-0">
          <h2 className="text-xl font-bold mb-6">Job Tracker</h2>
          <nav className="space-y-4">
            <Link href="/dashboard" className="block hover:text-gray-300">
              Overview
            </Link>
            <Link href="/dashboard/apply" className="block hover:text-gray-300">
              Add Application
            </Link>
            <Link href="/dashboard/status" className="block hover:text-gray-300">
              Status Board
            </Link>
            <Link href="/dashboard/profile" className="block hover:text-gray-300">
              Profile
            </Link>
            <form action="/api/auth/logout" method="POST">
              <button className="text-red-400 mt-6">Logout</button>
            </form>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
