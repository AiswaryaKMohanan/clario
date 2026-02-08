"use client";

import { useState } from "react";
export default function ApplyPage(){

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const[message,setMessage]= useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  const result =  await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify({ company, position }),
    });
   if(result.status == 201){setMessage(`Applied successfully`)}
   console.log( result);
   
  };

    return(<div>
        <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-500">
        Add Job Application ✍️
      </h1>
      <div className="text-2xl  text-green-500">
        {message}
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow "
      >
        <input
          placeholder="Company Name"
          className="w-full border p-2 rounded  text-blue-500"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          placeholder="Position"
          className="w-full border p-2 rounded  text-blue-500"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Application
        </button>
      </form>
    </div>
    </div>)
}