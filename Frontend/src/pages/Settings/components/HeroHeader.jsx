import {
  Settings,
  Save,
  RotateCcw,
  ShieldCheck,
  Globe,
  Lock,
} from "lucide-react";

export default function HeroHeader() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <Settings
              size={34}
              className="text-blue-600"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Platform Settings
            </h1>

            <p className="mt-1 text-slate-500">
              Configure authentication policies, organization preferences,
              notification settings, and security controls.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
            <RotateCcw size={18} />
            Reset Defaults
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={22} />

            <div>
              <p className="text-sm text-slate-500">
                Active Policies
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                12
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Lock className="text-blue-600" size={22} />

            <div>
              <p className="text-sm text-slate-500">
                MFA Status
              </p>

              <h3 className="text-xl font-bold text-green-600">
                Enabled
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Globe className="text-purple-600" size={22} />

            <div>
              <p className="text-sm text-slate-500">
                Deployment Region
              </p>

              <h3 className="text-xl font-bold text-slate-800">
                India
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}