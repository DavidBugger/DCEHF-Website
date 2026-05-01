import { Heart, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/propose-home-1.jpeg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Restoring{" "}
            <span className="text-orange-400">Hope.</span>
            <br />
            Rebuilding{" "}
            <span className="text-orange-400">Lives.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            We support internally displaced persons with shelter, food, healthcare, and opportunities for a better tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-md flex items-center gap-2 text-[15px] transition-colors">
              <Heart size={16} fill="white" />
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white/60 hover:border-white text-white font-semibold px-7 py-3.5 rounded-md flex items-center gap-2 text-[15px] transition-all hover:bg-white/10">
              Learn More
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
