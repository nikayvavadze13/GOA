// About.jsx — კომპონენტი ინფორმაციისთვის

import React from 'react';

function About() {
  const handleClick = () => {
    console.log("About");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl text-green-600 font-bold hover:text-green-800">About Us</h1>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Click About
      </button>
    </div>
  );
}

export default About;
