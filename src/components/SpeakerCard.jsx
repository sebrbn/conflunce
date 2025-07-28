export default function SpeakerCard({ name, title, bio, image }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200"></div> {/* Placeholder for image */}
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 mb-2">{title}</p>
        <p className="line-clamp-3">{bio}</p>
        <button className="mt-4 text-black underline hover:text-gray-600">
          View Profile
        </button>
      </div>
    </div>
  );
}