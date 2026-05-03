"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, CreditCard, Building2, User } from "lucide-react";
import { useState } from "react";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    bank: "Zenith Bank",
    accountNumber: "1228514582",
    accountName: "Displaced and Vulnerable Children Educational and Humanitarian Foundation",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1E3A5F] px-6 py-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2">Support Our Mission</h2>
              <p className="text-blue-100 text-[14px] leading-relaxed">
                Your contribution directly provides shelter, food, and education to displaced families in Plateau, Borno, and beyond.
              </p>
            </div>

            <div className="p-6">
              {/* Account Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
                  <CreditCard size={18} className="text-orange-500" />
                  Bank Transfer Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 size={16} className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Bank Name</p>
                      <p className="text-gray-900 font-bold">{accountDetails.bank}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User size={16} className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Account Name</p>
                      <p className="text-gray-900 font-bold text-[13px] leading-tight">
                        {accountDetails.accountName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Account Number</p>
                      <p className="text-2xl font-mono font-bold text-[#1E3A5F] tracking-wider">
                        {accountDetails.accountNumber}
                      </p>
                    </div>
                    <button
                      onClick={handleCopy}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-bold transition-all ${
                        copied ? "bg-green-100 text-green-700" : "bg-orange-50 text-orange-600 hover:bg-orange-100"
                      }`}
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-600 text-[13.5px] leading-relaxed">
                <p>
                  <strong>Why your support matters:</strong> Every Naira donated is utilized transparently to fund our core programs:
                </p>
                <ul className="grid grid-cols-2 gap-3">
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
                <p className="pt-2 italic text-gray-500">
                  "Small acts, when multiplied by millions of people, can transform the world."
                </p>
              </div>

              {/* Paystack Integration Placeholder */}
              {/* 
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full bg-[#09A5DB] hover:bg-[#0894C4] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-100">
                  Pay Securely with Paystack
                </button>
              </div>
              */}
            </div>

            <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-2 border-t border-gray-100">
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
