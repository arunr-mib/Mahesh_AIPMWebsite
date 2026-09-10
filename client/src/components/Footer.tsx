import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#f5f2ed] border-t border-black/[0.06] py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-1 text-center">
        <span
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", color: "#1a1a1a" }}
        >
          Pragyaa LLC
        </span>
        <a
          href="https://pragyaa.io/about"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.03em", color: "#1a1a1a99" }}
          className="hover:text-black transition-colors"
        >
          ©2026 Pragyaa LLC All Rights Reserved
        </a>
      </div>
    </footer>
  );
}
