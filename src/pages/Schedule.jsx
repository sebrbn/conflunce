export default function Schedule() {
  const days = [
    {
      date: "Day 1 - October 10",
      events: [
        { time: "9:00 AM", title: "Registration", speaker: "" },
        { time: "10:00 AM", title: "Opening Keynote", speaker: "Roy Black" },
        { time: "12:00 PM", title: "Lunch Break", speaker: "" },
        { time: "2:00 PM", title: "Digital Transformation", speaker: "Michelle Larson" },
      ]
    },
    {
      date: "Day 2 - October 11",
      events: [
        { time: "9:00 AM", title: "Future of AI", speaker: "Mark Petterson" },
        { time: "11:00 AM", title: "Networking Session", speaker: "" },
        { time: "1:00 PM", title: "Lunch Break", speaker: "" },
        { time: "3:00 PM", title: "Closing Remarks", speaker: "Mary Conor" },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Conference Schedule</h1>
      
      <div className="space-y-12">
        {days.map((day, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-6">{day.date}</h2>
            <div className="border rounded-lg overflow-hidden">
              {day.events.map((event, i) => (
                <div 
                  key={i} 
                  className={`p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b last:border-b-0`}
                >
                  <div className="flex items-start">
                    <div className="w-24 font-bold">{event.time}</div>
                    <div className="flex-1">
                      <h3 className="font-bold">{event.title}</h3>
                      {event.speaker && <p className="text-gray-600">Speaker: {event.speaker}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}