import React, { useEffect, useState } from "react";

const targetDate = new Date("2025-09-21T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-gray-300 mb-6">
        Launching Soon
      </h2>
      <div className="flex justify-center space-x-6 md:space-x-12 text-center">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDS", value: timeLeft.seconds },
        ].map((unit, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm tracking-widest mt-2 text-gray-300">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
