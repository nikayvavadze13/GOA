import React, { useState } from "react";
import parts from "./Parts";

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (part) => {
    setCart((prev) => {
      const currentQty = prev[part.id]?.quantity || 0;
      return {
        ...prev,
        [part.id]: { ...part, quantity: currentQty + 1 },
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const newQty = prev[id].quantity - 1;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [id]: { ...prev[id], quantity: newQty },
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">PC Parts Store</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parts.map((part) => (
            <div key={part.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold">{part.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{part.description}</p>
              <p className="text-lg font-bold mt-4">${part.price}</p>
              <button
                onClick={() => addToCart(part)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {Object.keys(cart).length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {Object.values(cart).map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600 text-sm">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    >
                      –
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
