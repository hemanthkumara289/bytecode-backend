import { Building2, Globe, Clock3, MapPinned, Save } from "lucide-react";
import { organization } from "../data";

export default function OrganizationSettings() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Organization Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure your organization's identity and regional preferences.
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Organization Name */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Building2 size={16} />
            Organization Name
          </label>

          <input
            type="text"
            defaultValue={organization.name}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Domain */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Globe size={16} />
            Organization Domain
          </label>

          <input
            type="text"
            defaultValue={organization.domain}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Region */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <MapPinned size={16} />
            Deployment Region
          </label>

          <select
            defaultValue={organization.region}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option>India</option>
            <option>United States</option>
            <option>Europe</option>
            <option>Singapore</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Timezone */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Clock3 size={16} />
            Time Zone
          </label>

          <select
            defaultValue={organization.timezone}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option>Asia/Kolkata</option>
            <option>UTC</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
            <option>Asia/Singapore</option>
          </select>
        </div>
      </div>

      {/* Info Card */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-semibold text-blue-700">
          Organization Information
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-700">
          These settings determine the default configuration for every
          application registered under your SecureAuth organization. Changes to
          the domain, region, or timezone will affect authentication logs,
          audit reports, and analytics.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end border-t border-slate-200 pt-6">
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Save size={18} />
          Save Organization
        </button>
      </div>
    </div>
  );
}