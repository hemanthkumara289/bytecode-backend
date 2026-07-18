import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Lock,
  Sparkles,
} from "lucide-react";

const badges = [
  {
    icon: Cpu,
    label: "AI Engine Online",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Lock,
    label: "Zero Trust Enabled",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: ShieldCheck,
    label: "Policy Active",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Sparkles,
    label: "98.4% Confidence",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function HeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <ShieldCheck size={30} />
          </div>

          <h1 className="text-4xl font-bold">
            Authentication Simulation
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100 text-lg">
            Simulate adaptive authentication decisions using
            AI-driven risk evaluation, contextual policies,
            and Zero Trust principles.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;

            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.4,
                }}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-medium ${badge.color}`}
              >
                <Icon size={18} />

                <span>{badge.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}