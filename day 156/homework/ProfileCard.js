import React, { useState } from "react";
import PropTypes from "prop-types";

function ProfileCard({ name, age, following }) {
  const [isFollowing, setIsFollowing] = useState(following);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="border p-4 rounded-md shadow w-64 m-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <button
        onClick={handleClick}
        className={`mt-2 px-4 py-2 rounded ${
          isFollowing ? "bg-green-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  following: PropTypes.bool.isRequired
};

export default ProfileCard;
