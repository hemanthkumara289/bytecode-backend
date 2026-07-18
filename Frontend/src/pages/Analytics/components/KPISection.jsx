import {
  ArrowUpRight,
  ArrowDownRight,
  LogIn,
  CheckCircle2,
  XCircle,
  ShieldCheck,
} from "lucide-react";

import { kpiData } from "../data";

const iconMap = {
  "Total Logins": LogIn,
  "Successful Logins": CheckCircle2,
  "Failed Logins": XCircle,
  "Average Risk Score": ShieldCheck,
};

const colorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
};

export default function KPISection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {kpiData.map((item) => {
        const Icon = iconMap[item.title];
        const colors = colorMap[item.color];

        return (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg}`}
              >
                <Icon
                  size={28}
                  className={colors.text}
                />
              </div>

              <div
                className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
                  item.trend === "up"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.trend === "up" ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}

                {item.change}
              </div>
            </div>

            {/* Value */}
            <div className="mt-6">
              <h2 className="text-4xl font-bold text-slate-800">
                {item.value}
              </h2>

              <p className="mt-2 text-slate-500">
                {item.title}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-sm text-slate-500">
                Compared with last 7 days
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}