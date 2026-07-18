import {
  ShieldAlert,
  AlertTriangle,
  ShieldCheck,
  Clock,
} from "lucide-react";

import { securityAlerts } from "../data";

export default function SecurityAlerts() {
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "Critical":
        return {
          badge: "bg-red-100 text-red-700",
          iconBg: "bg-red-100",
          iconColor: "text-red-600",
          Icon: ShieldAlert,
        };

      case "High":
        return {
          badge: "bg-orange-100 text-orange-700",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          Icon: AlertTriangle,
        };

      case "Medium":
        return {
          badge: "bg-yellow-100 text-yellow-700",
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-600",
          Icon: AlertTriangle,
        };

      default:
        return {
          badge: "bg-green-100 text-green-700",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          Icon: ShieldCheck,
        };
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Security Alerts
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Recent adaptive authentication events requiring attention
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
          <ShieldAlert
            size={24}
            className="text-red-600"
          />
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        {securityAlerts.map((alert) => {
          const style = getSeverityStyle(alert.severity);
          const Icon = style.Icon;

          return (
            <div
              key={alert.id}
              className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg}`}
                  >
                    <Icon
                      size={22}
                      className={style.iconColor}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {alert.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={14} />
                      {alert.time}
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                >
                  {alert.severity}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-500">
          <span className="font-semibold text-slate-700">
            Recommendation:
          </span>{" "}
          Review critical authentication anomalies immediately and enforce MFA
          for users triggering repeated high-risk events.
        </p>
      </div>
    </div>
  );
}