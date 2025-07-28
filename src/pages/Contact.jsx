export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions about the conference? Reach out to our team for assistance.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Email</h3>
              <p>itcomf@nail.com</p>
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>+1 800 123 456 789</p>
            </div>
            <div>
              <h3 className="font-bold">Address</h3>
              <p>123 Conference Center Blvd, Digital City, DC 10001</p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border rounded"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full p-2 border rounded"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-2 hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}