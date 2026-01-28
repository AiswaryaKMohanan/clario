"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#656dbf] to-[rgb(79,111,195)]">
      <div className="w-full max-w-sm bg-white rounded-md shadow-xl px-8 py-7">
        
        {/* Title */}
        <h1 className="text-center text-lg font-medium text-gray-700 mb-5">
          Register
        </h1>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-[rgb(21,68,149)] hover:bg-[hsl(247,75%,38%)] 
            text-white py-2 rounded text-sm font-medium transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
