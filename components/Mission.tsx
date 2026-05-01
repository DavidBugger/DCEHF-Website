import { ArrowRight, Users, GraduationCap, Building2 } from "lucide-react";

const points = [
  { icon: <Users size={22} className="text-blue-600" />, bg: "bg-blue-50", text: "Provide immediate relief and protection" },
  { icon: <GraduationCap size={22} className="text-orange-500" />, bg: "bg-orange-50", text: "Empower through education and skills" },
  { icon: <Building2 size={22} className="text-green-600" />, bg: "bg-green-50", text: "Rebuild communities for a better future" },
];

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/2026-04-29-3.41.23pm.jpeg"
              alt="Children in IDP camp"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Right: content */}
          <div>
            <p className="text-orange-500 font-bold text-xs tracking-[0.15em] uppercase mb-3">
              OUR MISSION
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Building a Future of<br />Dignity and Hope
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              We are committed to restoring dignity and hope to internally displaced persons by providing immediate and long-term solutions that empower individuals and strengthen communities.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full ${p.bg} flex items-center justify-center flex-shrink-0`}>
                    {p.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-[14px]">{p.text}</span>
                </div>
              ))}
            </div>

            <button className="bg-navy-700 bg-[#1E3A5F] hover:bg-[#152b47] text-white font-bold px-7 py-3.5 rounded-md flex items-center gap-2 text-[14px] transition-colors">
              Learn More About Us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
