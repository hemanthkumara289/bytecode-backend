import { BarChart3, CalendarDays, Download, RefreshCw } from "lucide-react";

export default function HeroHeader() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <BarChart3
              size={34}
              className="text-blue-600"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Security Analytics
            </h1>

            <p className="mt-1 text-slate-500">
              Monitor authentication trends, adaptive risk analysis,
              security alerts and user activity across your organization.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:bg-slate-100">
            <CalendarDays size={18} />
            Last 7 Days
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:bg-slate-100">
            <RefreshCw size={18} />
            Refresh
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            <Download size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-sm text-slate-500">
            Total Authentication Events
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-800">
            12,847
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-sm text-slate-500">
            High-Risk Logins
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-600">
            91
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-sm text-slate-500">
            MFA Challenges Triggered
          </p>

          <h3 className="mt-2 text-2xl font-bold text-blue-600">
            642
          </h3>
        </div>
      </div>
    </div>
  );
}