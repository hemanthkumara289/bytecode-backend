import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", success: 97, failed: 3 },
  { day: "Tue", success: 96, failed: 4 },
  { day: "Wed", success: 98, failed: 2 },
  { day: "Thu", success: 94, failed: 6 },
  { day: "Fri", success: 95, failed: 5 },
  { day: "Sat", success: 93, failed: 7 },
  { day: "Sun", success: 99, failed: 1 },
];

export default function RiskChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Security Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Weekly authentication performance and security insights.
          </p>
        </div>
      </div>

      {/* KPI Summary */}

      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-green-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Success Rate
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            98.4%
          </h3>
        </div>

        <div className="rounded-2xl bg-red-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Failed Logins
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-600">
            143
          </h3>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Avg Risk Score
          </p>

          <h3 className="mt-2 text-2xl font-bold text-blue-600">
            37
          </h3>
        </div>
      </div>

      {/* Chart */}

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="success"
              name="Success %"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="failed"
              name="Failed %"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}