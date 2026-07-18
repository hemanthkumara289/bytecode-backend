import { motion } from "framer-motion";
import {
  Globe,
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Application Request",
    description:
      "A user attempts to log in or perform a sensitive transaction.",
  },
  {
    icon: BrainCircuit,
    title: "Risk Analysis",
    description:
      "SecureAuth evaluates device, location, behavior, and transaction context.",
  },
  {
    icon: ShieldCheck,
    title: "Policy Evaluation",
    description:
      "Configured authentication policies determine the required verification steps.",
  },
  {
    icon: CheckCircle2,
    title: "Adaptive Decision",
    description:
      "Access is granted, challenged with MFA, or blocked based on the calculated risk.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Adaptive Authentication in Four Steps
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Every authentication request follows an intelligent workflow,
            ensuring security without compromising user experience.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-white p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}