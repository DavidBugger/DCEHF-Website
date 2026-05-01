"use client";
import React, { useState } from "react";
import { Heart, Shield, Eye, FileCheck, CheckCircle } from "lucide-react";

const amounts = [1000, 2500, 5000, 10000, 25000, 50000];

type BadgeItem = { Icon: React.ElementType; text: string };

const trustBadges: BadgeItem[] = [
  { Icon: Shield, text: "100% Secure Payments via Paystack" },
  { Icon: Eye, text: "Full financial transparency & reports" },
  { Icon: FileCheck, text: "Tax-deductible donations available" },
];

export default function DonatePage() {
  const [selected, setSelected] = useState(5000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = custom ? parseInt(custom) || 0 : selected;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="bg-white rounded-2xl shadow-md p-12 max-w-md w-full text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Thank You, {name || "Friend"}!</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Your donation of <strong>₦{finalAmount.toLocaleString()}</strong> is making a real difference. You will receive a receipt at <strong>{email}</strong>.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-orange-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Donate Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-64 bg-[#1E3A5F] flex items-end pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Give</p>
          <h1 className="text-4xl font-extrabold text-white">Make a Donation</h1>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Choose an Amount</h2>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setSelected(a); setCustom(""); }}
                      className={`py-3 rounded-lg font-bold text-[14px] border-2 transition-all ${
                        selected === a && !custom
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "bg-white border-gray-200 text-gray-700 hover:border-orange-300"
                      }`}
                    >
                      ₦{a.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount (₦)"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none mb-6"
                />
                <form onSubmit={handleDonate} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Full Name</label>
                    <input required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Amina Ibrahim" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Email Address</label>
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:border-orange-400 outline-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-[16px] flex items-center justify-center gap-2 transition-colors mt-2"
                  >
                    <Heart size={18} fill="white" />
                    Donate ₦{finalAmount.toLocaleString()}
                  </button>
                  <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-2">
                    <Shield size={12} /> Secured via Paystack · SSL Encrypted · Receipts issued
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#1E3A5F] rounded-2xl p-7 text-white">
                <h3 className="font-extrabold text-lg mb-4">Your Impact</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    ["₦1,000", "Provides meals for a child for a week"],
                    ["₦5,000", "Covers a family's food parcel for a month"],
                    ["₦10,000", "Supports one school enrollment"],
                    ["₦50,000", "Funds a family's shelter for a month"],
                  ].map(([amt, effect]) => (
                    <li key={amt} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-white/80"><strong className="text-orange-400">{amt}</strong> — {effect}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h4 className="font-bold text-gray-900 mb-4">Why Give to Us?</h4>
                {trustBadges.map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-9 h-9 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-orange-500" />
                    </div>
                    <span className="text-gray-600 text-[13px]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
