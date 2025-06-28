import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Nika', isFavorite: true },
  { id: 2, name: 'Lika', isFavorite: false },
  { id: 3, name: 'Gio', isFavorite: true },
  { id: 4, name: 'Ana', isFavorite: false },
];

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc'); // asc ან desc
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users
    .filter(user => (showFavorites ? user.isFavorite : true))
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Cards</h1>

      <div className="flex gap-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() =>
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
          }
        >
          Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
        </button>

        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>{user.isFavorite ? '⭐ Favorite' : 'Not Favorite'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
