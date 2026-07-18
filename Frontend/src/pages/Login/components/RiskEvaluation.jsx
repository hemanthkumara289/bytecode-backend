import { useEffect, useState } from "react";
import {
  ShieldCheck,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";

import { securityChecks } from "../data";

export default function RiskEvaluation({ user, onComplete }) {
  const [currentCheck, setCurrentCheck] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentCheck >= securityChecks.length) {
      setTimeout(() => {
        onComplete();
      }, 1200);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentCheck((prev) => prev + 1);
      setProgress(
        Math.round(((currentCheck + 1) / securityChecks.length) * 100)
      );
    }, 900);

    return () => clearTimeout(timer);
  }, [currentCheck, onComplete]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">
          <ShieldCheck
            size={32}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Adaptive Risk Analysis
          </h2>

          <p className="text-slate-500 mt-1">
            Evaluating contextual login signals...
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-slate-700">
            Security Scan
          </span>

          <span className="font-semibold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Checks */}
      <div className="space-y-4 mb-8">
        {securityChecks.map((check, index) => (
          <div
            key={check}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >
            <span className="text-slate-700 font-medium">
              {check}
            </span>

            {index < currentCheck ? (
              <CheckCircle2
                className="text-green-600"
                size={22}
              />
            ) : index === currentCheck ? (
              <LoaderCircle
                size={22}
                className="animate-spin text-blue-600"
              />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
            )}
          </div>
        ))}
      </div>

      {/* Context */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          Login Context
        </h3>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-xs uppercase text-slate-500">
              Device
            </p>

            <p className="font-semibold text-slate-700 mt-1">
              {user.device}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Location
            </p>

            <p className="font-semibold text-slate-700 mt-1">
              {user.location}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Risk Level
            </p>

            <p
              className={`font-bold mt-1 ${
                user.risk === "LOW"
                  ? "text-green-600"
                  : user.risk === "MEDIUM"
                  ? "text-amber-600"
                  : "text-red-600"
              }`}
            >
              {user.risk}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Predicted Score
            </p>

            <p className="font-bold text-blue-700 mt-1">
              {user.score}/100
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-xl bg-blue-50 border border-blue-200 p-4">
        <p className="text-blue-700 font-medium">
          AI Risk Engine is evaluating your login request using contextual
          authentication policies...
        </p>
      </div>
    </div>
  );
}