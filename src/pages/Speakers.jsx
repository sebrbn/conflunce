import React from "react";

const speakerList = [
  { name: "Tyler Black", title: "UI/UX Designer", img: "/avatars/1.jpg" },
  { name: "Christian Grant", title: "Design Director", img: "/avatars/2.jpg" },
  { name: "Michelle Larson", title: "Senior Product Designer", img: "/avatars/3.jpg" },
  { name: "Mark Petterson", title: "Design Guild Lead", img: "/avatars/4.jpg" },
  { name: "Marry Conor", title: "Senior UI/UX Designer", img: "/avatars/5.jpg" },
];

const Speakers = () => {
  return (
    <div className="bg-[#1E1B18] text-white min-h-screen py-20 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">SPEAKERS</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {speakerList.map((speaker, idx) => (
          <div key={idx} className="bg-white text-black p-4 rounded-xl shadow-md">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">{speaker.name}</h3>
            <p className="text-sm text-gray-700">{speaker.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
