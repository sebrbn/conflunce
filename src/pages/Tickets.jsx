export default function Tickets() {
  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Get Your Tickets</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Standard Ticket */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-4">Standard</h3>
          <p className="text-4xl font-bold mb-4">$299</p>
          <ul className="space-y-2 mb-6">
            <li>✔ Full conference access</li>
            <li>✔ Networking events</li>
            <li>✔ Conference materials</li>
          </ul>
          <button className="w-full bg-black text-white py-3 uppercase hover:bg-gray-800">
            Buy Now
          </button>
        </div>

        {/* VIP Ticket */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-4">VIP</h3>
          <p className="text-4xl font-bold mb-4">$599</p>
          <ul className="space-y-2 mb-6">
            <li>✔ All Standard benefits</li>
            <li>✔ Premium seating</li>
            <li>✔ Exclusive dinner</li>
            <li>✔ Speaker meet & greet</li>
          </ul>
          <button className="w-full bg-black text-white py-3 uppercase hover:bg-gray-800">
            Buy Now
          </button>
        </div>

        {/* Group Ticket */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-4">Group (5+)</h3>
          <p className="text-4xl font-bold mb-4">$199 <span className="text-sm">per person</span></p>
          <ul className="space-y-2 mb-6">
            <li>✔ All Standard benefits</li>
            <li>✔ Team discount</li>
            <li>✔ Dedicated seating</li>
          </ul>
          <button className="w-full bg-black text-white py-3 uppercase hover:bg-gray-800">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}