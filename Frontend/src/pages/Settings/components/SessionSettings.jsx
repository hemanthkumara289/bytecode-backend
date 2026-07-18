import {
  Clock3,
  TimerReset,
  Laptop,
  Users,
  RefreshCcw,
  LogOut,
} from "lucide-react";

import { sessionSettings } from "../data";

export default function SessionSettings() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Session Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure session lifetime, trusted devices, and user session
          management.
        </p>
      </div>

      {/* Settings Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Session Timeout */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Clock3 size={16} />
            Session Timeout
          </label>

          <select
            defaultValue={sessionSettings.sessionTimeout}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>15 Minutes</option>
            <option>30 Minutes</option>
            <option>1 Hour</option>
            <option>2 Hours</option>
          </select>
        </div>

        {/* Idle Timeout */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <TimerReset size={16} />
            Idle Timeout
          </label>

          <select
            defaultValue={sessionSettings.idleTimeout}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>5 Minutes</option>
            <option>10 Minutes</option>
            <option>15 Minutes</option>
            <option>30 Minutes</option>
          </select>
        </div>
      </div>

      {/* Toggle */}
      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Laptop
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Remember Trusted Devices
              </h3>

              <p className="text-sm text-slate-500">
                Skip MFA on previously verified devices.
              </p>
            </div>
          </div>

          <button
            className={`relative h-7 w-14 rounded-full transition ${
              sessionSettings.rememberDevice
                ? "bg-blue-600"
                : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                sessionSettings.rememberDevice
                  ? "left-8"
                  : "left-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <Users
                size={22}
                className="text-green-600"
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Maximum Concurrent Sessions
              </h3>

              <p className="text-sm text-slate-500">
                Allowed active sessions per user.
              </p>
            </div>
          </div>

          <span className="rounded-xl bg-slate-100 px-4 py-2 font-semibold text-slate-700">
            {sessionSettings.concurrentSessions}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6">
        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
          <RefreshCcw size={18} />
          Force Session Renewal
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
          <LogOut size={18} />
          Logout Inactive Sessions
        </button>
      </div>
    </div>
  );
}