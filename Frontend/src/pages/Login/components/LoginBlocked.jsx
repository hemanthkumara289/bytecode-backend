import {
  ShieldAlert,
  XCircle,
  MapPin,
  Monitor,
  Globe,
  RotateCcw,
  PhoneCall,
  AlertTriangle,
  Shield,
  Lock,
  Clock3,
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
    <div className="rounded-3xl border border-red-200 bg-white p-8 shadow-2xl">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-red-100">
          <ShieldAlert
            size={54}
            className="text-red-600"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-red-700">
          Authentication Blocked
        </h2>

        <p className="mt-3 text-slate-600">
          SecureAuth detected abnormal authentication signals and blocked this
          login attempt to protect your account.
        </p>
      </div>

      {/* Risk Summary */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
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

        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="mb-4 font-semibold text-slate-800">
            Policy Decision
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Authentication</span>
              <span className="font-semibold text-red-600">
                Denied
              </span>
            </div>

            <div className="flex justify-between">
              <span>Policy Applied</span>
              <span className="font-semibold">
                High Risk Policy
              </span>
            </div>

            <div className="flex justify-between">
              <span>Session</span>
              <span className="font-semibold">
                Terminated
              </span>
            </div>

            <div className="flex justify-between">
              <span>Admin Alert</span>
              <span className="font-semibold text-green-600">
                Generated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Login Context */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="mb-5 font-semibold text-slate-800">
          Login Context
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <Monitor
              className="text-blue-600"
              size={20}
            />

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
            <MapPin
              className="text-blue-600"
              size={20}
            />

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
            <Globe
              className="text-blue-600"
              size={20}
            />

            <div>
              <p className="text-xs uppercase text-slate-500">
                AI Decision
              </p>

              <p className="font-semibold text-red-600">
                {user.message}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock3
              className="text-blue-600"
              size={20}
            />

            <div>
              <p className="text-xs uppercase text-slate-500">
                Response
              </p>

              <p className="font-semibold text-green-600">
                Immediate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Indicators */}
      <div className="mt-8">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800">
          <AlertTriangle
            size={20}
            className="text-red-600"
          />
          Threat Indicators
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

              <span className="font-medium text-slate-700">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Recommendation */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Shield
            className="text-blue-600"
            size={20}
          />

          <h3 className="font-semibold text-blue-700">
            Security Recommendation
          </h3>
        </div>

        <p className="leading-7 text-blue-700">
          If this authentication attempt is legitimate, retry using your
          trusted device and network. If the issue persists, contact your
          administrator to verify your identity and review security policies.
        </p>

        <div className="mt-5 rounded-xl bg-white p-4">
          <div className="flex items-center gap-3">
            <Lock
              size={20}
              className="text-green-600"
            />

            <div>
              <p className="font-semibold">
                Account Status
              </p>

              <p className="text-sm text-slate-500">
                Your account remains secure. Only this authentication attempt
                has been blocked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
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
          Contact Administrator
        </button>
      </div>
    </div>
  );
}