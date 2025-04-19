import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="../images/logo.png"
          alt="Candle"
          className="w-20 h-auto drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
        />
        <h1 className="text-5xl font-bold text-orange-500 drop-shadow-[0_0_15px_rgba(255,140,0,1)]">
          RENKIDLE
        </h1>
      </div>
      <h2 className="text-3xl text-orange-400 font-semibold drop-shadow-[0_0_10px_rgba(255,140,0,1)]">
        YOUR EMAIL HAS BEEN CONFIRMED!
      </h2>
      <p className="mt-4 text-orange-300 text-lg max-w-md">
        Welcome to Renkidle — your adventure begins now.
      </p>
      <p className="mt-4 text-orange-300 text-lg max-w-md">
        Go Back to the Game and Enter Login Credentials
      </p>
    </div>
  );
}
