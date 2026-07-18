import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { loginTrendData } from "../data";

export default function LoginTrendChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Login Trends
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Successful vs failed authentication attempts
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
          <TrendingUp
            size={24}
            className="text-blue-600"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={loginTrendData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="success"
              name="Successful"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />

            <Line
              type="monotone"
              dataKey="failed"
              name="Failed"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-slate-200 pt-4">
        <p className="text-sm text-slate-500">
          Weekly authentication activity across all registered applications.
        </p>
      </div>
    </div>
  );
}