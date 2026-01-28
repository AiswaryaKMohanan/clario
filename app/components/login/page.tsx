'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#656dbf] to-[rgb(79,111,195)]">
      <div className="w-full max-w-sm bg-white rounded-md shadow-xl px-8 py-7">
        
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img src="/logo.svg" alt="Logo" className="h-10" />
        </div>

        <h1 className="text-center text-lg font-medium text-gray-700 mb-5">
          Log in to your account
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[rgb(21,68,149)] hover:bg-[hsl(247,75%,38%)] text-white py-2 rounded text-sm font-medium transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          New to Clario?{" "}
          <a href="/components/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

        <div className="text-center text-[11px] text-gray-400 mt-5">
          <a href="/register" className="hover:underline">Log in with SSO</a> ·{" "}
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
