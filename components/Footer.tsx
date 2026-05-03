import { Heart, Mail, Phone, MapPin, Globe, Rss, Share2, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center">
                <Heart size={16} fill="white" className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">DVCEHF</div>
                <div className="text-[10px] text-gray-400">Displaced and Vulnerable Children</div>
              </div>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-5">
              We are dedicated to restoring hope and dignity to all internally displaced persons across Nigeria.
            </p>
            <div className="flex gap-3">
              {[Globe, Rss, Share2, Link2].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {["About Us", "Our Mission", "Projects", "Stories", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 text-[13px] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white">Our Programs</h4>
            <ul className="flex flex-col gap-2.5">
              {["Emergency Shelter", "Food Assistance", "Healthcare Support", "Education & Skills", "Community Rebuilding", "Child Protection"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 text-[13px] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-[13px]">Bokkos, Plateau State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-400 flex-shrink-0" />
                <a href="mailto:info@dvcehf.org" className="text-gray-400 hover:text-orange-400 text-[13px] transition-colors">info@dvcehf.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-400 flex-shrink-0" />
                <a href="tel:+2348063234755" className="text-gray-400 hover:text-orange-400 text-[13px] transition-colors">+234 806 323 4755</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-[12px]">
            © {new Date().getFullYear()} DVCEHF NGO. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Donation Policy"].map((l) => (
              <a key={l} href="#" className="text-gray-500 hover:text-gray-300 text-[12px] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
