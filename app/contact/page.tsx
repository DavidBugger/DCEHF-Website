"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="relative h-64 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=80')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info cards */}
            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, bg: "bg-blue-50", color: "text-blue-600", title: "Our Office", lines: ["12 Relief Avenue, Wuse II", "Abuja, FCT, Nigeria"] },
                { icon: Mail, bg: "bg-orange-50", color: "text-orange-500", title: "Email Us", lines: ["info@hopedignity.org", "donations@hopedignity.org"] },
                { icon: Phone, bg: "bg-green-50", color: "text-green-600", title: "Call Us", lines: ["+234 800 000 0000", "+234 801 234 5678"] },
                { icon: Clock, bg: "bg-purple-50", color: "text-purple-600", title: "Office Hours", lines: ["Mon – Fri: 8am – 5pm", "Sat: 9am – 1pm"] },
              ].map(({ icon: Icon, bg, color, title, lines }, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className={color} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[14px] mb-1">{title}</h4>
                    {lines.map((l, j) => <p key={j} className="text-gray-500 text-[13px]">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <CheckCircle size={56} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="bg-orange-500 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Full Name</label>
                          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none" />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Email</label>
                          <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Subject</label>
                        <input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Message</label>
                        <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Write your message here..." className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none resize-none" />
                      </div>
                      <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-[15px] transition-colors">
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
