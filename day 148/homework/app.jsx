
import React from 'react';

export default function ProfileCard({ firstName, lastName, photo, description }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 text-center">
      <img
        className="w-32 h-32 mx-auto rounded-full object-cover"
        src={photo}
        alt={`${firstName} ${lastName}`}
      />
      <h2 className="text-xl font-bold mt-4">{firstName} {lastName}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
