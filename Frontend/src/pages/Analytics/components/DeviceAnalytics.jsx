import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Laptop } from "lucide-react";
import { deviceAnalytics } from "../data";

const COLORS = [
  "#2563eb",
  "#8b5cf6",
  "#14b8a6",
  "#f59e0b",
  "#ef4444",
];

export default function DeviceAnalytics() {
  const topDevice = deviceAnalytics.reduce((prev, current) =>
    current.value > prev.value ? current : prev
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Device Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Login distribution by operating system and device type
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
          <Laptop
            size={24}
            className="text-indigo-600"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={deviceAnalytics}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={95}
              paddingAngle={4}
            >
              {deviceAnalytics.map((device, index) => (
                <Cell
                  key={device.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {deviceAnalytics.map((device, index) => (
          <div
            key={device.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />

              <span className="text-slate-700">
                {device.name}
              </span>
            </div>

            <span className="font-semibold text-slate-800">
              {device.value}%
            </span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200">
        <p className="text-sm text-slate-500">
          Most Active Device
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-800">
          {topDevice.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {topDevice.value}% of all successful logins originated from this
          platform.
        </p>
      </div>
    </div>
  );
}