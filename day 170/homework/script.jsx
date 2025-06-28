import React, { useState, useEffect } from "react";

export default function LocalInput() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("myInput");
    if (stored) {
      setValue(stored);
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem("myInput", newValue);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Write something..."
      />
    </div>
  );
}
