import DonateSection from "@/components/DonateSection";
import ScrollReveal from "@/components/ScrollReveal";

const stories = [
  {
    img: "/images/story-amina.png",
    name: "Amina Ibrahim",
    tag: "Mother of 3 · Borno State",
    tagColor: "bg-orange-50 text-orange-700",
    quote: "Thanks to the support we received, my children can eat, learn, and sleep in a safe place. You restored our hope.",
    story: "Amina fled her village in 2022 with her three children after conflict destroyed their home. Through DVCEHF's shelter program, she was housed within 48 hours and enrolled her children in the accelerated learning programme.",
  },
  {
    img: "/images/story-musa.png",
    name: "Musa Garba",
    tag: "Farmer · Zamfara State",
    tagColor: "bg-blue-50 text-blue-700",
    quote: "The vocational training gave me a new start. I now have a small tailoring shop and support my family.",
    story: "Musa lost everything when armed groups attacked his community. After arriving at an IDP camp, he joined the vocational training program and learned tailoring. Today he runs a small shop near the camp.",
  },
  {
    img: "/images/story-grace.png",
    name: "Grace Eze",
    tag: "Teacher · Delta State",
    tagColor: "bg-green-50 text-green-700",
    quote: "I didn't think I'd ever teach again. The education support program brought me back to my purpose.",
    story: "Grace was a primary school teacher before flooding destroyed her community. DVCEHF's education program hired her as a facilitator, allowing her to teach 40 displaced children while rebuilding her own life.",
  },
  {
    img: "/images/story-emmanuel.png",
    name: "Emmanuel & Family",
    tag: "Family of 6 · Plateau State",
    tagColor: "bg-purple-50 text-purple-700",
    quote: "Our children are back in school. I never thought this would be possible again after what we went through.",
    story: "Emmanuel's family of six arrived at a Plateau State camp with nothing. Within weeks of DVCEHF's intervention, all four children were enrolled in school, and Emmanuel began a carpentry skills programme.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <div className="relative h-64 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=80')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Real Lives</p>
          <h1 className="text-4xl font-extrabold text-white">Stories of Hope</h1>
        </div>
      </div>

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
                Behind every statistic is a real person with a story. Here are some of the lives your support has helped transform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {stories.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
                  <img src={s.img} alt={s.name} className="w-full sm:w-44 h-52 sm:h-auto object-cover flex-shrink-0" />
                  <div className="p-6">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${s.tagColor} mb-3 inline-block`}>{s.tag}</span>
                    <h3 className="font-extrabold text-gray-900 text-[16px] mb-2">{s.name}</h3>
                    <blockquote className="text-[#1E3A5F] font-semibold text-[13.5px] italic leading-relaxed mb-3 border-l-2 border-orange-400 pl-3">
                      "{s.quote}"
                    </blockquote>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{s.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <DonateSection />
    </>
  );
}
