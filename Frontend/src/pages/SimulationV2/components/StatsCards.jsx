import { motion } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  Workflow,
  Timer,
} from "lucide-react";

export default function StatsCards({
  score = 15,
  decision = "Access Granted",
  level = "Low",
}) {
  const cards = [
    {
      title: "Risk Score",
      value: `${score}/100`,
      icon: ShieldAlert,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Decision",
      value:
        decision === "Access Granted"
          ? "Granted"
          : "Blocked",
      icon: ShieldCheck,
      color:
        decision === "Access Granted"
          ? "from-green-500 to-emerald-500"
          : "from-red-500 to-pink-500",
    },
    {
      title: "Policy",
      value:
        level === "High"
          ? "Adaptive MFA"
          : level === "Medium"
          ? "Risk Based"
          : "Standard MFA",
      icon: Workflow,
      color: "from-violet-500 to-indigo-500",
    },
    {
      title: "Latency",
      value: "143 ms",
      icon: Timer,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.45,
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.2 },
            }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div
              className={`h-2 bg-gradient-to-r ${card.color}`}
            />

            <div className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-800">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl bg-gradient-to-r ${card.color} p-4 text-white shadow-lg`}
              >
                <Icon size={26} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}