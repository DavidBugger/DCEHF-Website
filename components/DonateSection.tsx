import { Heart, Shield, Eye, FileCheck } from "lucide-react";

export default function DonateSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E3A5F 0%, #0f2440 100%)",
      }}
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[60px] border-white -translate-y-24 translate-x-24" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[40px] border-white translate-y-16 -translate-x-16" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left text */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Your Support Can<br />
              <span className="text-orange-400">Change a Life Today</span>
            </h2>
            <p className="text-white/70 text-[14.5px] leading-relaxed mb-8">
              Every donation, no matter the size, brings hope, dignity, and a brighter future to someone in need.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield size={18} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">100% Secure</div>
                  <div className="text-white/50 text-[10px]">Payments</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Eye size={18} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">Transparency</div>
                  <div className="text-white/50 text-[10px]">You Can Trust</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <FileCheck size={18} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">Tax Deductible</div>
                  <div className="text-white/50 text-[10px]">Donations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-[15px] transition-colors min-w-[180px]">
              <Heart size={18} className="text-red-500" fill="#ef4444" />
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-[15px] transition-all hover:bg-white/10 min-w-[180px]">
              Sponsor a Family
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
