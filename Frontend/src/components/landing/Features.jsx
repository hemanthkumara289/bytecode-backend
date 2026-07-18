import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  SlidersHorizontal,
  FileText,
  Building2,
  FlaskConical,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Adaptive Authentication",
    description:
      "Authentication dynamically adapts based on real-time risk analysis.",
  },
  {
    icon: BrainCircuit,
    title: "Risk Engine",
    description:
      "AI-powered scoring evaluates every login request instantly.",
  },
  {
    icon: SlidersHorizontal,
    title: "Policy Builder",
    description:
      "Create authentication rules without writing code.",
  },
  {
    icon: FileText,
    title: "Audit Logs",
    description:
      "Track every authentication event with detailed logs.",
  },
  {
    icon: Building2,
    title: "Multi-Tenant",
    description:
      "Manage multiple organizations from one platform.",
  },
  {
    icon: FlaskConical,
    title: "Simulation",
    description:
      "Test authentication policies before deploying them.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-blue-600 font-semibold">
            PLATFORM FEATURES
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Everything you need to secure authentication
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            SecureAuth combines adaptive authentication, policy management,
            risk analysis, simulations, and enterprise-grade audit logging
            into one unified platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}