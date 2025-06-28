import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleDelete = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {user ? (
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded ml-4"
          >
            Delete Account
          </button>
        </div>
      ) : (
        <>
          <Register setUser={setUser} />
          <Login setUser={setUser} />
        </>
      )}
    </div>
  );
}
