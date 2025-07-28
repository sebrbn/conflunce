import React from "react";
import summit from "../assets/summit.jpeg";
import marathon from "../assets/marathon.jpeg";
import fireside from "../assets/fireside.jpeg";
import panel from "../assets/panel.jpeg";
import counselling from "../assets/counselling2.jpeg";
import orientation from "../assets/orientation.jpeg";
import workshops from "../assets/workshops.jpeg";
import exhibitions from "../assets/exhibitions.jpeg";

const highlights = [
  {
    step: "01",
    title: "Industry-Academia Summit",
    desc: "Connect with industry leaders and academic experts in a collaborative environment. Explore trending innovations, case studies, and thought leadership from both domains.",
    bg: summit,
  },
  {
    step: "02",
    title: "Marathon",
    desc: "Join the ultimate endurance challenge alongside peers and faculty. Test your limits, push boundaries, and experience a day of fitness and fun.",
    bg: marathon,
  },
  {
    step: "03",
    title: "Fireside Chats",
    desc: "Engaging, informal conversations with innovators and thought leaders. Learn from personal journeys, struggles, and success stories.",
    bg: fireside,
  },
  {
    step: "04",
    title: "Panel Discussions",
    desc: "Participate in insightful panels exploring modern academic and industrial challenges. Hear expert perspectives and get your questions answered.",
    bg: panel,
  },
  {
    step: "05",
    title: "Career Counselling",
    desc: "Receive expert guidance on shaping your academic and career paths. Get resume tips, role clarity, and motivation from professionals.",
    bg: counselling,
  },
  {
    step: "06",
    title: "Orientation Sessions",
    desc: "Get introduced to the campus, values, and your journey ahead. Understand the culture and roadmap of your academic adventure.",
    bg: orientation,
  },
  {
    step: "07",
    title: "Workshops",
    desc: "Interactive sessions focused on building real-world technical and creative skills. Engage with mentors and participate hands-on.",
    bg: workshops,
  },
  {
    step: "08",
    title: "Exhibitions",
    desc: "A showcase of student innovations, research, and collaborative projects. Celebrate creativity and discover new possibilities.",
    bg: exhibitions,
  },
  {
    step: " ",
    title: " ",
    
  },

];

export default function EventHighlights() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 text-gray-800 font-[Poppins]">
      <div className="max-w-6xl mx-auto space-y-24">
        {highlights.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-12">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Step Number */}
              <div
                className="text-5xl sm:text-6xl md:text-[100px] font-extrabold text-transparent leading-none"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                {item.step}
              </div>

              {/* Content Block */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                {/* Title */}
                <h3
                  className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent leading-tight mb-4"
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
