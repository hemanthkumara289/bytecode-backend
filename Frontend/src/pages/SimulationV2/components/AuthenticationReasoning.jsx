import { motion } from "framer-motion";
import {
  Lock,
  Fingerprint,
  MapPin,
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Lock,
    title: "Credentials Verified",
    description: "User credentials successfully validated.",
  },
  {
    icon: Fingerprint,
    title: "Trusted Device",
    description: "Known device recognized with high confidence.",
  },
  {
    icon: MapPin,
    title: "Location Verified",
    description: "Login request originated from an approved region.",
  },
  {
    icon: ShieldCheck,
    title: "Behavior Analysis",
    description: "Login pattern matches previous user activity.",
  },
  {
    icon: ClipboardCheck,
    title: "Policy Evaluation",
    description: "Adaptive authentication policy executed successfully.",
  },
];

export default function AuthenticationReasoning({
  score,
  decision,
  running,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800">
          Authentication Reasoning
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Explainable authentication decision workflow
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-5 p-6">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: running ? index * 0.35 : 0,
              }}
              className="flex items-start gap-4"
            >
              <div className="rounded-xl bg-green-100 p-3">
                <Icon className="h-5 w-5 text-green-600" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-800">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {step.description}
                </p>
              </div>

              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Final Decision
            </p>

            <h3 className="mt-1 text-lg font-bold text-green-600">
              {decision}
            </h3>
          </div>

          <div className="rounded-xl bg-blue-50 px-5 py-3 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Risk Score
            </p>

            <p className="text-2xl font-bold text-blue-600">
              {score}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}