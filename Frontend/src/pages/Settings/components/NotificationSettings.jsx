import {
  Bell,
  Mail,
  AlertTriangle,
  FileText,
  Sparkles,
  Send,
} from "lucide-react";

import { notifications } from "../data";

const iconMap = {
  "Email Notifications": Mail,
  "Failed Login Alerts": AlertTriangle,
  "Weekly Security Reports": FileText,
  "AI Security Recommendations": Sparkles,
};

export default function NotificationSettings() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Notification Settings
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Control how administrators receive authentication and security
            notifications.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
          <Bell
            size={24}
            className="text-amber-600"
          />
        </div>
      </div>

      {/* Notification List */}
      <div className="space-y-5">
        {notifications.map((notification) => {
          const Icon = iconMap[notification.title];

          return (
            <div
              key={notification.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {notification.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Receive notifications related to{" "}
                    {notification.title.toLowerCase()}.
                  </p>
                </div>
              </div>

              {/* Toggle */}
              <button
                className={`relative h-7 w-14 rounded-full transition ${
                  notification.enabled
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    notification.enabled
                      ? "left-8"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div>
          <h3 className="font-semibold text-slate-800">
            Verify Notification Configuration
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Send a test notification to verify your email and alert settings.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Send size={18} />
          Test Notification
        </button>
      </div>
    </div>
  );
}