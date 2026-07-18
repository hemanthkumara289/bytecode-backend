import {
  User,
  Globe,
  MapPin,
  Laptop,
  Shield,
  KeyRound,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function EventDetails({ log }) {
  if (!log) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <p className="text-slate-500 text-center">
          Select an authentication event to view its details.
        </p>
      </div>
    );
  }

  const riskColor =
    log.risk <= 30
      ? "text-green-600"
      : log.risk <= 70
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Event Details
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Authentication event summary
        </p>
      </div>

      <div className="p-6 space-y-5">
        <DetailRow
          icon={<User size={18} />}
          label="User"
          value={log.user}
        />

        <DetailRow
          icon={<Globe size={18} />}
          label="IP Address"
          value={log.ip}
        />

        <DetailRow
          icon={<MapPin size={18} />}
          label="Location"
          value={log.location}
        />

        <DetailRow
          icon={<Laptop size={18} />}
          label="Device"
          value={log.device}
        />

        <DetailRow
          icon={<Shield size={18} />}
          label="Policy"
          value={log.policy}
        />

        <DetailRow
          icon={<KeyRound size={18} />}
          label="Authentication"
          value={log.method}
        />

        <div className="border rounded-lg p-4 bg-slate-50">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-600">
              <Activity size={18} />
              Risk Score
            </span>

            <span className={`text-xl font-bold ${riskColor}`}>
              {log.risk}
            </span>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-blue-50">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 size={18} />
              Final Decision
            </span>

            <span className="font-semibold text-blue-700">
              {log.decision}
            </span>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-slate-50">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Status</span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                log.status === "Success"
                  ? "bg-green-100 text-green-700"
                  : log.status === "Warning"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {log.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-none last:pb-0">
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