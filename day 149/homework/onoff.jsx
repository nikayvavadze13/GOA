import React, { useState } from 'react';

function ToggleFeature() {
  const [status, setStatus] = useState("OFF");

  const toggle = () => {
    setStatus(prev => (prev === "OFF" ? "ON" : "OFF"));
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl">Status: {status}</h2>
      <button onClick={toggle} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle
      </button>
    </div>
  );
}

export default ToggleFeature;
