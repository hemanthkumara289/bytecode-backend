import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function CircularRiskGauge({
  score = 15,
  level = "Low",
}) {
  const radius = 90;
  const stroke = 14;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (score / 100) * circumference;

  const color =
    level === "High"
      ? "#ef4444"
      : level === "Medium"
      ? "#f59e0b"
      : "#22c55e";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-red-100 p-3">
          <ShieldAlert
            className="text-red-600"
            size={24}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            AI Risk Assessment
          </h2>

          <p className="text-sm text-slate-500">
            Real-time adaptive risk evaluation
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative h-60 w-60">
          <svg
            className="-rotate-90"
            width="240"
            height="240"
          >
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={stroke}
            />

            <motion.circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference,
              }}
              animate={{
                strokeDashoffset: offset,
              }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-slate-800">
              {score}
            </h1>

            <p className="text-slate-500">
              /100
            </p>

            <span
              className="mt-4 rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{
                backgroundColor: color,
              }}
            >
              {level.toUpperCase()} RISK
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-green-50 p-4 text-center">
          <p className="text-xs text-slate-500">
            Low
          </p>

          <h3 className="mt-1 text-xl font-bold text-green-600">
            0-39
          </h3>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-4 text-center">
          <p className="text-xs text-slate-500">
            Medium
          </p>

          <h3 className="mt-1 text-xl font-bold text-yellow-600">
            40-69
          </h3>
        </div>

        <div className="rounded-2xl bg-red-50 p-4 text-center">
          <p className="text-xs text-slate-500">
            High
          </p>

          <h3 className="mt-1 text-xl font-bold text-red-600">
            70-100
          </h3>
        </div>
      </div>
    </motion.div>
  );
}