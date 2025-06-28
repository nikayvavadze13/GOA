import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [radio, setRadio] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [dropdown, setDropdown] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Form Example</h1>

        {}
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        {}
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="radio"
              value="one"
              onChange={(e) => setRadio(e.target.value)}
            />{" "}
            Option One
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="radio"
              value="two"
              onChange={(e) => setRadio(e.target.value)}
            />{" "}
            Option Two
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="three"
              onChange={(e) => setRadio(e.target.value)}
            />{" "}
            Option Three
          </label>
        </div>

        {}
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="checkbox"
              checked={checkboxes.option1}
              onChange={(e) =>
                setCheckboxes({ ...checkboxes, option1: e.target.checked })
              }
            />{" "}
            Checkbox 1
          </label>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={checkboxes.option2}
              onChange={(e) =>
                setCheckboxes({ ...checkboxes, option2: e.target.checked })
              }
            />{" "}
            Checkbox 2
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkboxes.option3}
              onChange={(e) =>
                setCheckboxes({ ...checkboxes, option3: e.target.checked })
              }
            />{" "}
            Checkbox 3
          </label>
        </div>

        {}
        <select
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="">Select an option</option>
          <option value="choice1">Choice 1</option>
          <option value="choice2">Choice 2</option>
          <option value="choice3">Choice 3</option>
        </select>

        {}
        <div className="mt-4">
          <p>Text: {text}</p>
          <p>Radio: {radio}</p>
          <p>
            Checkboxes:{" "}
            {Object.entries(checkboxes)
              .filter(([k, v]) => v)
              .map(([k]) => k)
              .join(", ")}
          </p>
          <p>Dropdown: {dropdown}</p>
        </div>
      </div>
    </div>
  );
}
