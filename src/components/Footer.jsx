import React from "react";

// Import logos
import miterdham from "../assets/mitherdham.png";
import rcss from "../assets/rcss.png";
import rset from "../assets/rset2.png";
import rbs from "../assets/rbs.png";
import rcmas from "../assets/rcmas.jpg";
import rvcas from "../assets/rvcs2.png";
import shthevara from "../assets/shthevara.jpeg";   

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white text-black-500 text-center py-1 shadow-md z-50">
      <div
        className="flex justify-center items-center flex-wrap gap-4 mb-2"
        aria-label="Institution logos"
      >
        <img src={shthevara} alt="SH Thevara" className="h-12 md:h-16 object-contain" />
        <img src={rcss} alt="RCSS" className="h-12 md:h-16 object-contain" />
        <img src={rset} alt="RSET" className="h-12 md:h-16 object-contain" />
        <img src={rbs} alt="RBS" className="h-12 md:h-16 object-contain" />
        <img src={rcmas} alt="RCMAS" className="h-12 md:h-16 object-contain" />
        <img src={rvcas} alt="RVCAS" className="h-16 md:h-20 object-contain" />
        <img src={miterdham} alt="Miterdham" className="h-12 md:h-16 object-contain" />

      </div>
      {/* <p className="text-xs md:text-sm">
        © {new Date().getFullYear()} Confluence. All rights reserved.
      </p> */}
    </footer>
  );
}
