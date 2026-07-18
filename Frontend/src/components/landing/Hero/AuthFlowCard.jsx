import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  MapPin,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

const scenarios = {
  normal: {
    title: "Normal Login",
    risk: 18,
    color: "bg-green-500",
    riskColor: "text-green-600",
    barColor: "bg-green-500",
    device: "Known Device",
    location: "Bengaluru, India",
    amount: "₹5,000",
    flow: ["Password", "Access Granted"],
  },

  transfer: {
    title: "High Value Transfer",
    risk: 72,
    color: "bg-yellow-500",
    riskColor: "text-yellow-600",
    barColor: "bg-yellow-500",
    device: "Known Device",
    location: "Hyderabad, India",
    amount: "₹75,000",
    flow: [
      "Password",
      "OTP Verification",
      "Access Granted",
    ],
  },

  suspicious: {
    title: "Suspicious Device",
    risk: 94,
    color: "bg-red-500",
    riskColor: "text-red-600",
    barColor: "bg-red-500",
    device: "Unknown Device",
    location: "Moscow, Russia",
    amount: "₹2,50,000",
    flow: [
      "Password",
      "OTP Verification",
      "Manager Approval",
      "Access Granted",
    ],
  },
};

export default function AuthFlowCard() {
  const [selected, setSelected] = useState("transfer");

  const current = scenarios[selected];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl p-8"
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Authentication Request
          </h2>

          <p className="text-sm text-slate-500">
            Adaptive Decision Engine
          </p>
        </div>

        <div className="rounded-full bg-blue-100 p-3">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      {/* Scenario Buttons */}

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-slate-600">
          Scenario
        </p>

        <div className="flex gap-2">
          {Object.entries(scenarios).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 ${
                selected === key
                  ? `${value.color} text-white shadow-lg`
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>
      </div>

      {/* Device */}

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-6 space-y-4"
        >
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <Smartphone className="text-blue-600" />

              <div>
                <p className="text-xs text-slate-500">
                  Device
                </p>

                <h4 className="font-semibold">
                  {current.device}
                </h4>
              </div>
            </div>
          </div>

          {/* Location */}

          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <h4 className="font-semibold">
                  {current.location}
                </h4>
              </div>
            </div>
          </div>

          {/* Amount */}

          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <IndianRupee className="text-blue-600" />

              <div>
                <p className="text-xs text-slate-500">
                  Transaction
                </p>

                <h4 className="font-semibold">
                  {current.amount}
                </h4>
              </div>
            </div>
          </div>
                    {/* Risk Score */}

          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Risk Score
              </p>

              <span
                className={`text-lg font-bold ${current.riskColor}`}
              >
                {current.risk}/100
              </span>
            </div>

            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <motion.div
                key={current.risk}
                initial={{ width: 0 }}
                animate={{ width: `${current.risk}%` }}
                transition={{ duration: 0.8 }}
                className={`h-full rounded-full ${current.barColor}`}
              />
            </div>
          </div>

          {/* Authentication Flow */}

          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="mb-4 font-semibold text-slate-800">
              Authentication Flow
            </h3>

            <div className="space-y-3">
              {current.flow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.2,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-1">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>

                    <span className="font-medium text-slate-700">
                      {step}
                    </span>
                  </div>

                  {index !== current.flow.length - 1 && (
                    <div className="ml-5 h-6 border-l-2 border-dashed border-slate-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decision */}

          <motion.div
            key={selected + "-status"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">
                  Authentication Result
                </p>

                <h3 className="mt-1 text-lg font-bold">
                  Access Granted
                </h3>
              </div>

              <ShieldCheck className="h-8 w-8" />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}