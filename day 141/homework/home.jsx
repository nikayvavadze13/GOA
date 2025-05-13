

import React from 'react';

function Home() {
  
  const handleClick = () => {
    console.log("Home");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl text-blue-600 font-bold hover:text-blue-800">Welcome to the Home Page</h1>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Home
      </button>
    </div>
  );
}

export default Home;
