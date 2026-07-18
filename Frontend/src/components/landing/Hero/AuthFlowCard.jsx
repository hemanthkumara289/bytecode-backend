import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  MapPin,
  IndianRupee,
  CheckCircle2,
  Loader2,
  Laptop,
  Globe,
  Bell,
  ShieldAlert,
  Lock,
} from "lucide-react";

const scenarios = {
  normal: {
    title: "Normal Login",

    risk: 18,
    level: "Low Risk",

    color: "bg-green-500",
    badge: "bg-green-100 text-green-700",
    riskColor: "text-green-600",
    barColor: "bg-green-500",

    device: "Known Device",
    browser: "Chrome 138",
    os: "Windows 11",

    location: "Bengaluru, India",
    network: "Trusted Network",

    amount: "₹5,000",

    decision: "Password Only",

    status: "Authentication Successful",

    statusColor:
      "from-green-500 to-emerald-600",

    flow: [
      "Password Verification",
      "Risk Analysis",
      "Access Granted",
    ],
  },

  transfer: {
    title: "High Value Transfer",

    risk: 72,
    level: "Medium Risk",

    color: "bg-yellow-500",
    badge: "bg-yellow-100 text-yellow-700",
    riskColor: "text-yellow-600",
    barColor: "bg-yellow-500",

    device: "Known Device",
    browser: "Microsoft Edge",
    os: "Windows 11",

    location: "Hyderabad, India",
    network: "Corporate Network",

    amount: "₹75,000",

    decision: "Password + OTP",

    status:
      "Additional Verification Required",

    statusColor:
      "from-yellow-500 to-orange-500",

    flow: [
      "Password Verification",
      "Risk Analysis",
      "Policy Evaluation",
      "OTP Verification",
      "Access Granted",
    ],
  },

  suspicious: {
    title: "Suspicious Device",

    risk: 94,
    level: "High Risk",

    color: "bg-red-500",
    badge: "bg-red-100 text-red-700",
    riskColor: "text-red-600",
    barColor: "bg-red-500",

    device: "Unknown Device",
    browser: "Tor Browser",
    os: "Linux",

    location: "Moscow, Russia",
    network: "VPN Detected",

    amount: "₹2,50,000",

    decision:
      "Block Login & Notify Admin",

    status: "Authentication Blocked",

    statusColor:
      "from-red-600 to-rose-700",

    flow: [
      "Password Verification",
      "Risk Analysis",
      "Policy Evaluation",
      "Block Authentication",
      "Notify Administrator",
    ],
  },
};

const engineSteps = [
  "Evaluating Device",
  "Checking Location",
  "Analyzing User Behaviour",
  "Calculating Risk Score",
  "Applying Authentication Policy",
  "Generating Decision",
];

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 2;

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(current);
    }, 15);

    return () => clearInterval(interval);
  }, [value]);

  return count;
}

export default function AuthFlowCard() {
  const [selected, setSelected] =
    useState("transfer");

  const current = useMemo(
    () => scenarios[selected],
    [selected]
  );

  const animatedRisk = AnimatedCounter(
    current.risk
  );

  const [engineIndex, setEngineIndex] =
    useState(0);

  const [processing, setProcessing] =
    useState(true);

  useEffect(() => {
    setProcessing(true);
    setEngineIndex(0);

    const interval = setInterval(() => {
      setEngineIndex((prev) => {
        if (prev === engineSteps.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setProcessing(false);
          }, 500);

          return prev;
        }

        return prev + 1;
      });
    }, 350);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl backdrop-blur-xl"
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

      {/* Scenario */}

      <div className="mt-7">
        <p className="mb-3 text-sm font-semibold text-slate-600">
          Select Scenario
        </p>

        <div className="flex flex-wrap gap-2">
          {Object.entries(scenarios).map(
            ([key, value]) => (
              <button
                key={key}
                onClick={() =>
                  setSelected(key)
                }
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  selected === key
                    ? `${value.color} scale-105 text-white shadow-lg`
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {value.title}
              </button>
            )
          )}
        </div>
      </div>

      {/* Engine Status */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">
            Adaptive Risk Engine
          </h3>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              processing
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {processing
              ? "Evaluating..."
              : "Decision Ready"}
          </span>
        </div>

        <div className="space-y-3">
          {engineSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity:
                  index <= engineIndex
                    ? 1
                    : 0.3,
                x: 0,
              }}
              className="flex items-center gap-3"
            >
              {index < engineIndex ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : index ===
                  engineIndex &&
                processing ? (
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-slate-300" />
              )}

              <span className="text-sm font-medium text-slate-700">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!processing && (
          <motion.div
            key={selected}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="mt-6 space-y-4"
          >
                        {/* Device */}

            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <Smartphone className="text-blue-600" />

                <div className="flex-1">
                  <p className="text-xs text-slate-500">
                    Device
                  </p>

                  <h4 className="font-semibold text-slate-900">
                    {current.device}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {current.browser} • {current.os}
                  </p>
                </div>

                <Laptop className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Location */}

            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />

                <div className="flex-1">
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <h4 className="font-semibold text-slate-900">
                    {current.location}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {current.network}
                  </p>
                </div>

                <Globe className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Transaction */}

            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <IndianRupee className="text-blue-600" />

                <div>
                  <p className="text-xs text-slate-500">
                    Transaction
                  </p>

                  <h4 className="font-semibold text-slate-900">
                    {current.amount}
                  </h4>
                </div>
              </div>
            </div>

            {/* Risk Score */}

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Risk Score
                  </p>

                  <span
                    className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${current.badge}`}
                  >
                    {current.level}
                  </span>
                </div>

                <span
                  className={`text-3xl font-bold ${current.riskColor}`}
                >
                  {animatedRisk}
                </span>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  key={current.risk}
                  initial={{ width: 0 }}
                  animate={{
                    width: `${current.risk}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className={`h-full ${current.barColor}`}
                />
              </div>
            </div>

            {/* Authentication Timeline */}

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-5 font-semibold text-slate-800">
                Authentication Flow
              </h3>

              <div className="space-y-3">
                {current.flow.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.15,
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
              key={selected + "-decision"}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className={`rounded-2xl bg-gradient-to-r ${current.statusColor} p-5 text-white shadow-xl`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">
                    Adaptive Decision
                  </p>

                  <h3 className="mt-1 text-lg font-bold">
                    {current.decision}
                  </h3>

                  <p className="mt-2 text-sm opacity-90">
                    {current.status}
                  </p>
                </div>

                {selected === "suspicious" ? (
                  <ShieldAlert className="h-10 w-10" />
                ) : (
                  <Lock className="h-10 w-10" />
                )}
              </div>

              {selected === "suspicious" && (
                <div className="mt-5 rounded-xl bg-white/10 p-3">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />

                    <span className="text-sm font-medium">
                      Administrator Alert Triggered
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}