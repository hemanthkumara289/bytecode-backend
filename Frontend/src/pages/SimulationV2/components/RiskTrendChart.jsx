import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function RiskTrendChart({ score }) {
  const data = [
    { stage: "Login", risk: 90 },
    { stage: "Device", risk: 70 },
    { stage: "Location", risk: 55 },
    { stage: "Behavior", risk: 35 },
    { stage: "Policy", risk: score },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6"
    >
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Risk Trend Analytics
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Risk score evolution throughout authentication
        </p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="stage" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="risk"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}