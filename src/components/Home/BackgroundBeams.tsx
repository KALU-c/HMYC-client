"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams.tsx";
import Navbar from "../Navbar.jsx";

export function BackgroundBeamsDemo(props) {
  return (
    <div className="min-h-screen h-full w-full bg-neutral-950 relative flex flex-col items-center justify-between antialiased">
      <Navbar/>
      <div className="w-full h-screen flex items-center">
        <p className="text-neutral-500 w-full text-sm text-center relative z-10 py-10">
          {props.type}
        </p>
        
      </div>
      <div className="w-3/4">
        <p className="text-white text-lg font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dignissimos. Laudantium temporibus, laborum quisquam quasi perferendis inventore molestias placeat. Provident, beatae maiores cupiditate at, quae natus reprehenderit nemo in illo deserunt unde id sed porro iste quo nostrum, blanditiis sit necessitatibus qui! Voluptas perspiciatis quod, debitis atque ipsa natus consectetur!</p>
      </div>
      <div className="text-neutral-600 text-lg">&copy; realkal 2024</div>
      <BackgroundBeams />
    </div>
  );
}