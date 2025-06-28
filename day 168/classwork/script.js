import React, { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null);

  // check if user is already registered
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setRegisteredUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setRegisteredUser(userData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-sm">
        {registeredUser ? (
          <h1 className="text-2xl font-bold">
            გამარჯობა, {registeredUser.username}!
          </h1>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">რეგისტრაცია</h1>
            <input
              type="text"
              placeholder="მომხმარებლის სახელი"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="პაროლი"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              რეგისტრაცია
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
