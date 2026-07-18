import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Monitor,
  ArrowRight,
  Clock3,
  Fingerprint,
  Sparkles,
} from "lucide-react";

export default function LoginSuccess({ user, onContinue }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      onContinue();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, onContinue]);

  const getRiskStyle = () => {
    switch (user.risk) {
      case "LOW":
        return {
          badge: "bg-green-100 text-green-700",
          policy: "Password Authentication",
        };
      case "MEDIUM":
        return {
          badge: "bg-amber-100 text-amber-700",
          policy: "Password + MFA",
        };
      default:
        return {
          badge: "bg-red-100 text-red-700",
          policy: "Blocked",
        };
    }
  };

  const risk = getRiskStyle();

  const redirectProgress = ((5 - countdown) / 5) * 100;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
      {/* Success */}
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-green-100">
          <CheckCircle2
            size={56}
            className="text-green-600"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          Authentication Successful
        </h2>

        <p className="mt-3 text-slate-500">
          SecureAuth successfully verified your identity and granted secure
          access.
        </p>
      </div>

      {/* Summary */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Risk Score
          </p>

          <h3 className="mt-2 text-4xl font-bold text-blue-700">
            {user.score}
            <span className="text-lg text-slate-400">/100</span>
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Security Level
          </p>

          <div
            className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${risk.badge}`}
          >
            <ShieldCheck size={16} />
            {user.risk} RISK
          </div>
        </div>
      </div>

      {/* Session */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="mb-5 font-semibold text-slate-800">
          Authenticated Session
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
            <Fingerprint
              className="text-blue-600"
              size={20}
            />

            <div>
              <p className="text-xs uppercase text-slate-500">
                Authentication
              </p>

              <p className="font-semibold text-slate-700">
                {risk.policy}
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
                Session Status
              </p>

              <p className="font-semibold text-green-600">
                Active
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Decision */}
      <div className="mt-6 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles
            size={20}
            className="text-green-600"
          />

          <h3 className="font-semibold text-green-700">
            Adaptive Authentication Decision
          </h3>
        </div>

        <p className="text-green-700">
          {user.message}
        </p>

        <div className="mt-5 rounded-xl bg-white p-4">
          <div className="flex justify-between text-sm">
            <span>Policy Applied</span>

            <span className="font-semibold">
              {risk.policy}
            </span>
          </div>

          <div className="mt-2 flex justify-between text-sm">
            <span>Decision</span>

            <span className="font-semibold text-green-600">
              Access Granted
            </span>
          </div>
        </div>
      </div>

      {/* Redirect */}
      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Redirecting to Dashboard...
          </span>

          <span className="font-semibold text-blue-600">
            {countdown}s
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000"
            style={{
              width: `${redirectProgress}%`,
            }}
          />
        </div>

        <button
          onClick={onContinue}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue to Dashboard

          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}