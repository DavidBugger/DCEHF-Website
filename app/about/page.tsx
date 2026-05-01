import { Users, Target, Eye, Heart } from "lucide-react";
import DonateSection from "@/components/DonateSection";

const team = [
  { name: "Dr. Fatima Aliyu", role: "Executive Director", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80" },
  { name: "Emmanuel Okafor", role: "Programs Manager", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Aisha Bello", role: "Field Coordinator", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Joseph Adamu", role: "Finance Officer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
];

const values = [
  { icon: <Heart size={22} className="text-orange-500" />, bg: "bg-orange-50", title: "Compassion", desc: "We approach every person with empathy, kindness, and genuine care." },
  { icon: <Eye size={22} className="text-blue-600" />, bg: "bg-blue-50", title: "Transparency", desc: "We maintain full accountability in all our operations and finances." },
  { icon: <Target size={22} className="text-green-600" />, bg: "bg-green-50", title: "Impact", desc: "Every action we take is driven by measurable, lasting outcomes." },
  { icon: <Users size={22} className="text-purple-600" />, bg: "bg-purple-50", title: "Community", desc: "We believe in the power of people coming together to rebuild lives." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-72 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/2026-04-29-3.41.23pm.jpeg')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">About Us</p>
          <h1 className="text-4xl font-extrabold text-white">Who We Are</h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Founded on Faith in Humanity</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              DVCEHF was founded in 2018 by a group of volunteers who witnessed firsthand the suffering of families displaced by conflict in northeastern Nigeria. What began as a small relief effort has grown into a nationwide organization serving over 12,000 individuals annually.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              We work in partnership with local communities, government agencies, and international partners to deliver shelter, food, healthcare, and education to those who need it most.
            </p>
          </div>
          <img
            src="/images/propose-home-1.jpeg"
            alt="Our work"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className={`w-12 h-12 rounded-full ${v.bg} flex items-center justify-center mb-4`}>{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-3">The People</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((m, i) => (
              <div key={i} className="text-center">
                <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 shadow-md" />
                <h3 className="font-bold text-gray-900 text-[15px]">{m.name}</h3>
                <p className="text-gray-500 text-[13px] mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateSection />
    </>
  );
}
