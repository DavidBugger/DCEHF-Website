import { Target, Heart, Users, Leaf, ArrowRight } from "lucide-react";
import DonateSection from "@/components/DonateSection";

const pillars = [
  { icon: Heart, bg: "bg-orange-50", color: "text-orange-500", title: "Immediate Relief", desc: "We respond within 48 hours of displacement with food, water, shelter kits, and medical support to families in acute crisis." },
  { icon: Users, bg: "bg-blue-50", color: "text-blue-600", title: "Community Empowerment", desc: "We equip IDPs with skills, education, and resources so they can rebuild their lives with dignity and independence." },
  { icon: Target, bg: "bg-green-50", color: "text-green-600", title: "Long-Term Resettlement", desc: "We work with government and partners to secure safe, permanent housing and livelihood opportunities for displaced families." },
  { icon: Leaf, bg: "bg-purple-50", color: "text-purple-600", title: "Sustainable Development", desc: "We invest in water, sanitation, and infrastructure projects that benefit entire communities for generations to come." },
];

const goals = [
  { num: "20,000", label: "IDPs served by end of 2026" },
  { num: "5,000", label: "Families permanently resettled" },
  { num: "₦100M", label: "Aid funds raised annually" },
  { num: "15", label: "States actively covered" },
];

export default function MissionPage() {
  return (
    <>
      <div className="relative h-72 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Our Purpose</p>
          <h1 className="text-4xl font-extrabold text-white">Our Mission</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-4">Our Core Belief</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            "Every person forcibly displaced deserves dignity, safety, and a pathway back to a meaningful life."
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            Hope & Dignity exists to bridge the gap between crisis and recovery — providing not just relief, but the tools, skills, and opportunities for IDPs to rebuild their futures on their own terms.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-3">How We Deliver</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Four Pillars</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, bg, color, title, desc }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-3">{title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Goals */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-bold text-xs tracking-widest uppercase mb-3">2026 Targets</p>
            <h2 className="text-3xl font-extrabold text-white">What We're Working Toward</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((g, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-400 mb-2">{g.num}</div>
                <div className="text-white/70 text-[13px]">{g.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 mx-auto transition-colors">
              Help Us Reach These Goals <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <DonateSection />
    </>
  );
}
