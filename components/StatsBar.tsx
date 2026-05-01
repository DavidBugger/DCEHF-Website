import { Users, Home, UtensilsCrossed, Building2 } from "lucide-react";

const stats = [
  {
    icon: <Users size={28} className="text-white" />,
    bg: "bg-blue-600",
    number: "5,000+",
    label: "Lives Impacted",
    sub: "Families supported across communities",
  },
  {
    icon: <Home size={28} className="text-white" />,
    bg: "bg-orange-500",
    number: "1,200+",
    label: "Shelters Provided",
    sub: "Safe shelter for displaced families",
  },
  {
    icon: <UtensilsCrossed size={28} className="text-white" />,
    bg: "bg-green-500",
    number: "12,500+",
    label: "Meals Distributed",
    sub: "Nutritious meals served every month",
  },
  {
    icon: <Building2 size={28} className="text-white" />,
    bg: "bg-purple-500",
    number: "80+",
    label: "Communities Reached",
    sub: "Across multiple states and settlements",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white shadow-xl rounded-2xl mx-4 sm:mx-8 -mt-10 relative z-20 px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {stats.map((s, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-full ${s.bg} flex items-center justify-center flex-shrink-0`}>
              {s.icon}
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gray-900">{s.number}</div>
              <div className="text-sm font-bold text-gray-800">{s.label}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-snug">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
