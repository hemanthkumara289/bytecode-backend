import { motion } from "framer-motion";
import {
  Globe,
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Application Request",
    description:
      "A user signs in or initiates a sensitive transaction through an integrated application.",
    input: "Username • Device • Location",
    output: "Authentication Request",
  },
  {
    icon: BrainCircuit,
    title: "Risk Analysis",
    description:
      "SecureAuth analyzes device trust, location, behaviour, IP reputation, and transaction context.",
    input: "Request Context",
    output: "Risk Score",
  },
  {
    icon: ShieldCheck,
    title: "Policy Evaluation",
    description:
      "Configured authentication policies determine the required verification method based on the calculated risk.",
    input: "Risk Score",
    output: "Authentication Policy",
  },
  {
    icon: CheckCircle2,
    title: "Adaptive Decision",
    description:
      "Access is granted, challenged with MFA, or blocked while every action is recorded in audit logs.",
    input: "Policy Decision",
    output: "Final Authentication",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold tracking-wide text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Adaptive Authentication Workflow
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            Every authentication request passes through an intelligent decision
            engine that evaluates risk, applies security policies, and determines
            the most appropriate authentication method in real time.
          </p>
        </motion.div>

        {/* Workflow */}

        <div className="relative mt-20 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
                >
                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                    <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                  </div>

                  {/* Step */}

                  <div className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  {/* Title */}

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Input */}

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Input
                    </p>

                    <div className="mt-2 rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                      {step.input}
                    </div>
                  </div>

                  {/* Output */}

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Output
                    </p>

                    <div className="mt-2 rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                      {step.output}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}

                {index !== steps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:flex">
                    <motion.div
                      animate={{
                        x: [0, 6, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                      }}
                      className="rounded-full bg-white p-2 shadow-md"
                    >
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}