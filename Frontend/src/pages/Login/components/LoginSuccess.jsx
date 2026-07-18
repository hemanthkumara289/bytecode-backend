import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Monitor,
  ArrowRight,
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

  const getRiskBadge = () => {
    switch (user.risk) {
      case "LOW":
        return "bg-green-100 text-green-700";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-700";
      case "HIGH":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="rounded-3xl bg-white shadow-2xl border border-slate-200 p-8">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2
            size={52}
            className="text-green-600"
          />
        </div>
      </div>

      {/* Heading */}
      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Authentication Successful
        </h2>

        <p className="mt-2 text-slate-500">
          Your identity has been successfully verified.
        </p>
      </div>

      {/* Summary */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Risk Score
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-700">
            {user.score}
            <span className="text-lg text-slate-500">/100</span>
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Security Level
          </p>

          <div
            className={`inline-flex mt-3 rounded-full px-4 py-2 text-sm font-semibold ${getRiskBadge()}`}
          >
            <ShieldCheck size={16} className="mr-2" />
            {user.risk} RISK
          </div>
        </div>
      </div>

      {/* Device */}
      <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-4">
        <div className="flex items-center gap-3">
          <Monitor className="text-blue-600" size={20} />
          <div>
            <p className="text-sm text-slate-500">
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
            <p className="text-sm text-slate-500">
              Location
            </p>

            <p className="font-semibold text-slate-700">
              {user.location}
            </p>
          </div>
        </div>
      </div>

      {/* AI Message */}
      <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5">
        <h3 className="font-semibold text-green-700">
          AI Decision
        </h3>

        <p className="mt-2 text-green-600">
          {user.message}
        </p>
      </div>

      {/* Redirect */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Redirecting to Dashboard in
          </p>

          <p className="text-2xl font-bold text-blue-600">
            {countdown}s
          </p>
        </div>

        <button
          onClick={onContinue}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}