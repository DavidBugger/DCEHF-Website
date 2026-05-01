"use client";
import { useState } from "react";
import DonateSection from "@/components/DonateSection";
import { X } from "lucide-react";

const categories = ["All", "Shelter", "Food", "Education", "Healthcare", "Community"];

const photos = [
  { src: "/images/2026-04-29-3.40.50pm.jpeg", cat: "Shelter", caption: "Emergency tents for displaced families in Borno State" },
  { src: "/images/2026-04-29-3.41.23pm.jpeg", cat: "Community", caption: "Community gathering at IDP camp — Plateau State" },
  { src: "/images/2026-04-29-3.40.57pm.jpeg", cat: "Education", caption: "Children attending class at a temporary learning centre" },
  { src: "/images/2026-04-29-3.42.14pm(1).jpeg", cat: "Education", caption: "Women's vocational training — cohort 4 graduation" },
  { src: "/images/2026-04-29-3.42.13pm.jpeg", cat: "Food", caption: "Monthly food parcel distribution — Zamfara" },
  { src: "/images/2026-04-29-3.40.42pm.jpeg", cat: "Healthcare", caption: "Mobile medical clinic serving IDP community" },
  { src: "/images/2026-04-29-3.40.39pm.jpeg", cat: "Community", caption: "Youth engagement programme — Delta State" },
  { src: "/images/2026-04-29-3.40.41pm.jpeg", cat: "Community", caption: "Volunteer team at field coordination meeting" },
  { src: "/images/2026-04-29-3.41.12pm.jpeg", cat: "Shelter", caption: "Transitional housing construction — Kogi State" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof photos[0]>(null);

  const filtered = active === "All" ? photos : photos.filter(p => p.cat === active);

  return (
    <>
      <div className="relative h-64 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/2026-04-29-3.41.23pm.jpeg')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Our Work In Images</p>
          <h1 className="text-4xl font-extrabold text-white">Photo Gallery</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all border ${active === c
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-sm cursor-pointer"
                onClick={() => setLightbox(p)}
              >
                <img src={p.src} alt={p.caption} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <p className="text-white text-[12.5px] font-medium px-4 py-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {p.caption}
                  </p>
                </div>
                <span className="absolute top-3 left-3 bg-white/90 text-gray-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {p.cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white hover:text-orange-400" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="w-full rounded-xl" />
            <p className="text-white/80 text-sm mt-3 text-center">{lightbox.caption}</p>
          </div>
        </div>
      )}

      <DonateSection />
    </>
  );
}
