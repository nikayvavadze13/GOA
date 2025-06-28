import React, { useRef } from "react";

export default function ScrollBoxes() {
  const box2Ref = useRef(null);

  const scrollToBox2 = () => {
    box2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center space-y-40 py-20 bg-gradient-to-b from-purple-100 to-purple-200 min-h-screen">
      <div
        onClick={scrollToBox2}
        onMouseEnter={scrollToBox2}
        className="w-64 h-64 bg-pink-500 text-white flex items-center justify-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
      >
        Box 1 (Click or Hover)
      </div>

      <div
        ref={box2Ref}
        className="w-64 h-64 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-xl"
      >
        Box 2 (Scroll Target)
      </div>
    </div>
  );
}
