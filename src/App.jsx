import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CountdownPage from "./pages/CountdownPage";
import Speakers from "./pages/Speakers";
import Tickets from "./pages/Tickets";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import "@fontsource/orbitron"; 


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countdown" element={<CountdownPage />} />
            {/* <Route path="/speakers" element={<Speakers />} /> */}
            {/* <Route path="/tickets" element={<Tickets />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/schedule" element={<Schedule />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
