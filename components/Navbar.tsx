"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/our-mission" },
  { label: "Projects", href: "/projects" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center border border-gray-200">
            <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-[15px] leading-tight tracking-wide">DVCEHF</div>
            <div className="text-[9px] text-gray-400 leading-tight">Displaced and Vulnerable Children</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              className={`text-[13.5px] font-medium transition-colors hover:text-orange-400 ${
                i === 0 ? "text-orange-400 border-b-2 border-orange-400 pb-0.5" : "text-gray-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link href="/donate" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[13px] px-5 py-2.5 rounded-md flex items-center gap-2 transition-colors">
            <Heart size={14} fill="white" />
            Donate Now
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1a1a2e] border-t border-gray-700 px-4 py-4 flex flex-col gap-3">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="text-gray-300 text-sm hover:text-orange-400">
              {label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)} className="bg-orange-500 text-white font-bold text-sm px-5 py-2.5 rounded-md mt-2 text-center">
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
