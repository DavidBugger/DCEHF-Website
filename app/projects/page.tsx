import { ArrowRight } from "lucide-react";
import DonateSection from "@/components/DonateSection";

const projects = [
  { img: "/images/2026-04-29-3.42.12pm.jpeg", cat: "Shelter", catColor: "text-blue-600", tag: "bg-blue-50 text-blue-700", title: "Plateau State Emergency Shelter Drive", desc: "Providing 400 temporary shelters to families displaced by recent flooding in Plateau State.", progress: 72, raised: "₦8.6M", goal: "₦12M" },
  { img: "/images/2026-04-29-3.42.13pm.jpeg", cat: "Food", catColor: "text-orange-500", tag: "bg-orange-50 text-orange-700", title: "Monthly Food Parcel Distribution — Borno", desc: "Distributing monthly food packages to 1,200 families across 8 IDP camps in Borno State.", progress: 85, raised: "₦10.2M", goal: "₦12M" },
  { img: "/images/2026-04-29-3.42.14pm.jpeg", cat: "Education", catColor: "text-green-600", tag: "bg-green-50 text-green-700", title: "Women Vocational Training Cohort 5", desc: "Empowering 250 displaced women with tailoring, catering, and digital skills.", progress: 55, raised: "₦2.75M", goal: "₦5M" },
  { img: "/images/2026-04-29-3.40.42pm.jpeg", cat: "Healthcare", catColor: "text-red-500", tag: "bg-red-50 text-red-700", title: "Mobile Medical Clinic — Delta State", desc: "Monthly mobile clinic visits providing free healthcare to 3,000 IDPs in Delta State.", progress: 40, raised: "₦2M", goal: "₦5M" },
  { img: "/images/2026-04-29-3.40.50pm.jpeg", cat: "Children", catColor: "text-purple-600", tag: "bg-purple-50 text-purple-700", title: "Back to School — IDP Children Initiative", desc: "Enrolling 920 displaced children into accelerated learning programmes across 5 states.", progress: 90, raised: "₦9M", goal: "₦10M" },
  { img: "/images/2026-04-29-3.40.51pm.jpeg", cat: "WASH", catColor: "text-teal-600", tag: "bg-teal-50 text-teal-700", title: "Clean Water Access Project — Zamfara", desc: "Installing 15 boreholes and water points across conflict-affected communities in Zamfara.", progress: 30, raised: "₦1.5M", goal: "₦5M" },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="relative h-72 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/2026-04-29-3.41.23pm.jpeg')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Our Work</p>
          <h1 className="text-4xl font-extrabold text-white">Active Projects</h1>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${p.tag} mb-3 inline-block`}>{p.cat}</span>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-2 leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{p.desc}</p>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Raised: <strong className="text-gray-800">{p.raised}</strong></span>
                      <span>Goal: {p.goal}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${p.progress}%` }} />
                    </div>
                    <div className="text-right text-xs text-orange-500 font-semibold mt-1">{p.progress}%</div>
                  </div>
                  <a href="#" className={`${p.catColor} font-semibold text-[13px] flex items-center gap-1 hover:gap-2 transition-all`}>
                    View Project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateSection />
    </>
  );
}
