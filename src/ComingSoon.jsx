import React from "react";

export default function ComingSoon() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/background-ai-theme.png')" }}
    >
      <div className="text-center p-6 max-w-xl bg-black bg-opacity-70 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Advisor<span style={{ color: '#18b6d9' }}>OS</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          AI-powered infrastructure for the modern RIA.
        </p>
        <p className="italic text-gray-300 text-sm mb-8">
          Launching soon — purpose-built by J2 Capital Management.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black focus:outline-none w-full sm:w-auto"
          />
          <button className="bg-[#18b6d9] hover:bg-[#139bb7] text-white px-6 py-2 rounded-md">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
