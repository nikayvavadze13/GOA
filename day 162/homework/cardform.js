import { useState } from "react";
import InfoCard from "./InfoCard";

function CardForm() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && info) {
      const newCard = { id: Date.now(), name, info };
      setCards([...cards, newCard]);
      setName("");
      setInfo("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <InfoCard key={card.id} name={card.name} info={card.info} />
        ))}
      </div>
    </div>
  );
}

export default CardForm;
