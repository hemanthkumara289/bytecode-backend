import {
  AlertTriangle,
  ShieldAlert,
  Smartphone,
  Globe,
  Clock,
} from "lucide-react";

const alerts = [
  {
    title: "Multiple Failed Login Attempts",
    description: "15 failed login attempts detected for Finance Admin.",
    level: "Critical",
    time: "2 mins ago",
    icon: ShieldAlert,
  },
  {
    title: "Unknown Device Login",
    description: "New device detected from Hyderabad, India.",
    level: "High",
    time: "8 mins ago",
    icon: Smartphone,
  },
  {
    title: "High-Risk Location Access",
    description: "Login attempted from an unusual geographic location.",
    level: "Medium",
    time: "15 mins ago",
    icon: Globe,
  },
  {
    title: "Policy Review Required",
    description: "One adaptive policy has not been updated in 90 days.",
    level: "Low",
    time: "1 hour ago",
    icon: Clock,
  },
];

const badgeColors = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

export default function AlertsPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Security Alerts
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor high-priority authentication and security events.
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="rounded-2xl border border-slate-200 p-4 transition-all duration-200 hover:border-blue-300 hover:bg-slate-50"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-red-100 p-2">
                <alert.icon
                  size={20}
                  className="text-red-600"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-800">
                    {alert.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColors[alert.level]}`}
                  >
                    {alert.level}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {alert.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {alert.time}
                  </span>

                  <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
                    Investigate →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
        View All Alerts
      </button>
    </div>
  );
}