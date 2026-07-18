import { User, Mail, ShieldCheck, KeyRound, Save } from "lucide-react";
import { profile } from "../data";

export default function ProfileSettings() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Profile Settings
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage your administrator profile and account information.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600">
            {profile.avatar}
          </div>

          <button className="mt-4 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Change Avatar
          </button>
        </div>

        {/* Form */}
        <div className="grid flex-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <User size={16} />
              Full Name
            </label>

            <input
              type="text"
              defaultValue={profile.name}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Mail size={16} />
              Email Address
            </label>

            <input
              type="email"
              defaultValue={profile.email}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <ShieldCheck size={16} />
              Role
            </label>

            <input
              type="text"
              defaultValue={profile.role}
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-600"
            />
          </div>

          <div className="flex items-end">
            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
              <KeyRound size={18} />
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end border-t border-slate-200 pt-6">
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Save size={18} />
          Update Profile
        </button>
      </div>
    </div>
  );
}