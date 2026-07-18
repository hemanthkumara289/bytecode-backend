import {
  User,
  Mail,
  Briefcase,
  Building2,
  MapPin,
  Laptop,
  Shield,
  Lock,
  RefreshCw,
} from "lucide-react";

export default function UserDetails({ user }) {
  if (!user) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <p className="text-center text-slate-500">
          Select a user to view account details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {user.name.charAt(0)}
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-800">
            {user.name}
          </h2>

          <p className="text-slate-500">{user.email}</p>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <DetailRow
          icon={<Mail size={18} />}
          label="Email"
          value={user.email}
        />

        <DetailRow
          icon={<Briefcase size={18} />}
          label="Role"
          value={user.role}
        />

        <DetailRow
          icon={<Building2 size={18} />}
          label="Application"
          value={user.application}
        />

        <DetailRow
          icon={<MapPin size={18} />}
          label="Location"
          value={user.location}
        />

        <DetailRow
          icon={<Laptop size={18} />}
          label="Device"
          value={user.device}
        />

        <DetailRow
          icon={<Shield size={18} />}
          label="MFA"
          value={user.mfa ? "Enabled" : "Disabled"}
        />

        <div className="border rounded-lg p-4 bg-slate-50">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Account Status</span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : user.status === "Locked"
                  ? "bg-red-100 text-red-700"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition">
            <Lock size={18} />
            {user.status === "Locked"
              ? "Unlock Account"
              : "Lock Account"}
          </button>

          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
            <RefreshCw size={18} />
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-none">
      <div className="text-blue-600 mt-1">{icon}</div>

      <div className="flex-1">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-medium text-slate-800 break-words">
          {value}
        </p>
      </div>
    </div>
  );
}