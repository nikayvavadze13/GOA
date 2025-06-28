import React, { useState, useEffect } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, email };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("მომხმარებელი წარმატებით შეინახა!");
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">სარეგისტრაციო ფორმა</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="სახელი"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="ელ. ფოსტა"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleReset = () => {
    setSeconds(0);
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleResume = () => {
    setRunning(true);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">ტაიმერი</h2>
      <div className="text-4xl mb-4">{seconds}s</div>
      <div className="flex justify-around">
        <button
          onClick={handleReset}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Reset
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={handleResume}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <RegistrationForm />
      <Timer />
    </div>
  );
}
