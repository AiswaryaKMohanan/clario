"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Clear token cookie and redirect
    document.cookie = "token=; path=/; max-age=0";
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">Job Tracker</h1>
      
      <div className="relative">
        {/* Profile Button */}
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <span className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
            U
          </span>
          <span className="hidden sm:block">Profile</span>
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md overflow-hidden z-50">
            <Link
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => setShowDropdown(false)}
            >
              View Profile
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
