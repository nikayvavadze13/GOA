
export default function Name({ name }) {
  return <h2 className="text-xl font-bold">{name}</h2>;
}

export default function Description({ text }) {
  return <p className="text-gray-600">{text}</p>;
}


export default function Avatar({ src }) {
  return <img src={src} alt="Avatar" className="w-24 h-24 rounded-full" />;
}


import { useState } from "react";
import Name from "./Name";
import Description from "./Description";
import Avatar from "./Avatar";

export default function ProfileCard({ name, desc, img }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm text-center">
      <Avatar src={img} />
      <Name name={name} />
      <Description text={desc} />
      <button
        onClick={() => setFollowing(!following)}
        className={`mt-4 px-4 py-2 rounded ${
          following ? "bg-green-600" : "bg-blue-600"
        } text-white`}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}
