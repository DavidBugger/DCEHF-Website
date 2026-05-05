import { Home, UtensilsCrossed, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    image: "/images/2026-04-29-3.41.12pm.jpeg",
    iconBg: "bg-blue-600",
    icon: <Home size={20} className="text-white" />,
    title: "Emergency Shelter",
    desc: "We provide safe and temporary shelter to displaced families in urgent need.",
    linkColor: "text-blue-600",
  },
  {
    image: "/images/2026-04-29-3.42.13pm.jpeg",
    iconBg: "bg-orange-500",
    icon: <UtensilsCrossed size={20} className="text-white" />,
    title: "Food Assistance",
    desc: "We distribute nutritious meals to children and families every day.",
    linkColor: "text-orange-500",
  },
  {
    image: "/images/2026-04-29-3.42.14pm.jpeg",
    iconBg: "bg-green-600",
    icon: <GraduationCap size={20} className="text-white" />,
    title: "Education & Skills",
    desc: "We empower IDPs with education and vocational training opportunities.",
    linkColor: "text-green-600",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-xs tracking-[0.15em] uppercase mb-3">
            OUR PROGRAMS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            How We Make an Impact
          </h2>
          <p className="text-gray-500 text-[15px]">
            Through sustainable programs, we bring hope and lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {programs.map((p, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover"
                />
                <div className={`absolute bottom-3 left-4 w-10 h-10 rounded-md ${p.iconBg} flex items-center justify-center`}>
                  {p.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-[16px] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed mb-4">{p.desc}</p>
                <Link href="/projects" className={`${p.linkColor} font-semibold text-[13px] flex items-center gap-1 hover:gap-2 transition-all`}>
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

