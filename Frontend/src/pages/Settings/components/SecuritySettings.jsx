import {
  ShieldCheck,
  Lock,
  Smartphone,
  Globe,
  ChevronDown,
} from "lucide-react";

import { securitySettings } from "../data";

export default function SecuritySettings() {
  const icons = {
    "Adaptive Authentication": ShieldCheck,
    "Require Multi-Factor Authentication": Smartphone,
    "Trusted Devices": Lock,
    "Geo Restrictions": Globe,
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Security Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure authentication policies and adaptive security controls.
        </p>
      </div>

      {/* Security Toggles */}
      <div className="space-y-5">
        {securitySettings.map((setting) => {
          const Icon = icons[setting.title];

          return (
            <div
              key={setting.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {setting.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {setting.description}
                  </p>
                </div>
              </div>

              {/* Toggle */}
              <button
                className={`relative h-7 w-14 rounded-full transition ${
                  setting.enabled
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    setting.enabled
                      ? "left-8"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Additional Policies */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Password Policy */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password Policy
          </label>

          <div className="flex items-center justify-between rounded-xl border border-slate-300 px-4 py-3">
            <span className="text-slate-700">
              Strong (12+ Characters)
            </span>

            <ChevronDown size={18} className="text-slate-500" />
          </div>
        </div>

        {/* Risk Threshold */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Adaptive Risk Threshold
          </label>

          <div className="flex items-center justify-between rounded-xl border border-slate-300 px-4 py-3">
            <span className="text-slate-700">
              Medium
            </span>

            <ChevronDown size={18} className="text-slate-500" />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
        <h3 className="font-semibold text-green-700">
          Security Status
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-700">
          Your organization currently enforces adaptive authentication and
          multi-factor authentication for medium and high-risk logins. Trusted
          devices are enabled, while geo-restrictions remain disabled.
        </p>
      </div>
    </div>
  );
}