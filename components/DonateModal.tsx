"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, CreditCard, Building2, User, Globe } from "lucide-react";
import { useState } from "react";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const accounts = [
    { id: "NGN", label: "Nigerian Naira (NGN)", number: "1311326023", bank: "Zenith Bank" },
    { id: "USD", label: "US Dollar (USD)", number: "5075793486", bank: "Zenith Bank" },
    { id: "EURO", label: "Euro (EURO)", number: "5081460587", bank: "Zenith Bank" },
  ];

  const accountName = "Displaced and Vulnerable Children Educational and Humanitarian Foundation";

  const handleCopy = (number: string, id: string) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-[#1E3A5F] px-6 py-8 text-white relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2">Support Our Mission</h2>
              <p className="text-blue-100 text-[14px] leading-relaxed">
                Your contribution directly provides shelter, food, and education to displaced families in Plateau, Borno, and beyond.
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {/* Account Name Header */}
              <div className="mb-6 bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                <User size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-blue-600 uppercase tracking-widest font-bold mb-0.5">Account Name</p>
                  <p className="text-[#1E3A5F] font-extrabold text-[13px] leading-tight uppercase">
                    {accountName}
                  </p>
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div className="space-y-4">
                <h3 className="text-gray-900 font-bold flex items-center gap-2 text-[15px]">
                  <CreditCard size={18} className="text-orange-500" />
                  Bank Transfer Details
                </h3>

                {accounts.map((acc) => (
                  <div key={acc.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-gray-400" />
                        <span className="text-[12px] font-bold text-gray-700">{acc.label}</span>
                      </div>
                      <span className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-500 font-bold uppercase">
                        {acc.bank}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Account Number</p>
                        <p className="text-xl font-mono font-bold text-[#1E3A5F] tracking-wider truncate">
                          {acc.number}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCopy(acc.number, acc.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-shrink-0 ${
                          copiedId === acc.id ? "bg-green-100 text-green-700" : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        {copiedId === acc.id ? <Check size={16} /> : <Copy size={16} />}
                        {copiedId === acc.id ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-4 text-gray-600 text-[13.5px] leading-relaxed">
                <p>
                  <strong>Why your support matters:</strong> Every donation is utilized transparently to fund our core programs:
                </p>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Emergency Shelter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Nutritional Food
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Child Healthcare
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    School Enrollment
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-2 border-t border-gray-100 flex-shrink-0">
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
                Official DVCEHF Donation Portal
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
