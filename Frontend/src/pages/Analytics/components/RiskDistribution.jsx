import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ShieldAlert } from "lucide-react";
import { riskDistribution } from "../data";

const COLORS = [
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

export default function RiskDistribution() {
  const total = riskDistribution.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Risk Distribution
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Authentication requests grouped by adaptive risk level
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
          <ShieldAlert
            size={24}
            className="text-red-600"
          />
        </div>
      </div>

      <div className="relative h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={riskDistribution}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {riskDistribution.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-slate-800">
            {total}%
          </span>

          <span className="text-sm text-slate-500">
            Total Events
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {riskDistribution.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-slate-700">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-slate-800">
              {item.value}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-200 pt-4">
        <p className="text-sm text-slate-500">
          Most authentication requests are classified as low risk, while only a
          small percentage require additional verification or blocking.
        </p>
      </div>
    </div>
  );
}