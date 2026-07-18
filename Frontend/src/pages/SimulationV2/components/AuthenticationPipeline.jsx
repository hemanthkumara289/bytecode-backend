import { motion } from "framer-motion";
import {
  KeyRound,
  Laptop,
  MapPin,
  Brain,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const pipeline = [
  {
    title: "Password",
    subtitle: "Identity Verification",
    icon: KeyRound,
    color: "bg-blue-500",
  },
  {
    title: "Device Trust",
    subtitle: "Known Device Check",
    icon: Laptop,
    color: "bg-indigo-500",
  },
  {
    title: "Geo Verification",
    subtitle: "Location Validation",
    icon: MapPin,
    color: "bg-purple-500",
  },
  {
    title: "Behavior AI",
    subtitle: "Behaviour Analysis",
    icon: Brain,
    color: "bg-orange-500",
  },
  {
    title: "Policy Engine",
    subtitle: "Adaptive Rules",
    icon: ShieldCheck,
    color: "bg-emerald-500",
  },
  {
    title: "Decision",
    subtitle: "Authentication Result",
    icon: CheckCircle2,
    color: "bg-green-600",
  },
];

export default function AuthenticationPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800">
          Authentication Pipeline
        </h2>

        <p className="text-sm text-slate-500">
          Real-time adaptive authentication workflow
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {pipeline.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title}>
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div
                  className={`${step.color} rounded-2xl p-4 text-white shadow-lg`}
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {step.subtitle}
                  </p>
                </div>

                <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Passed
                </div>
              </motion.div>

              {index !== pipeline.length - 1 && (
                <div className="ml-10 h-8 w-0.5 bg-slate-300" />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}