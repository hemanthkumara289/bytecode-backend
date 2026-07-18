import {
  ShieldAlert,
  XCircle,
  MapPin,
  Monitor,
  Globe,
  RotateCcw,
  PhoneCall,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginBlocked({ user }) {
  const navigate = useNavigate();

  const reasons = [
    "Impossible travel detected",
    "Unknown or untrusted device",
    "Suspicious IP reputation",
    "Adaptive policy denied access",
  ];

  return (
    <div className="rounded-3xl bg-white shadow-2xl border border-red-200 p-8">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <ShieldAlert
            size={50}
            className="text-red-600"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-red-700">
          High Risk Login Detected
        </h2>

        <p className="mt-3 text-slate-600">
          Your login request has been blocked by the Adaptive Authentication
          Engine to protect your account.
        </p>
      </div>

      {/* Risk Score */}
      <div className="mt-8 rounded-2xl bg-red-50 border border-red-200 p-6 text-center">
        <p className="text-sm uppercase tracking-wide text-red-500">
          Risk Score
        </p>

        <h3 className="mt-2 text-5xl font-bold text-red-600">
          {user.score}
          <span className="text-2xl">/100</span>
        </h3>

        <div className="mt-4 inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
          HIGH RISK
        </div>
      </div>

      {/* Login Details */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-5">
        <div className="flex items-center gap-3">
          <Monitor className="text-blue-600" size={20} />

          <div>
            <p className="text-xs uppercase text-slate-500">
              Device
            </p>

            <p className="font-semibold text-slate-700">
              {user.device}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-blue-600" size={20} />

          <div>
            <p className="text-xs uppercase text-slate-500">
              Location
            </p>

            <p className="font-semibold text-slate-700">
              {user.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Globe className="text-blue-600" size={20} />

          <div>
            <p className="text-xs uppercase text-slate-500">
              AI Decision
            </p>

            <p className="font-semibold text-red-600">
              {user.message}
            </p>
          </div>
        </div>
      </div>

      {/* Reasons */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Why was access blocked?
        </h3>

        <div className="space-y-3">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
            >
              <XCircle
                size={18}
                className="text-red-600"
              />

              <span className="text-slate-700">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-semibold text-blue-700">
          Security Recommendation
        </h3>

        <p className="mt-2 text-blue-600 leading-7">
          If this login attempt was legitimate, verify your identity using a
          trusted device or contact your organization administrator for
          assistance.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          <RotateCcw size={18} />
          Try Again
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <PhoneCall size={18} />
          Contact Admin
        </button>
      </div>
    </div>
  );
}