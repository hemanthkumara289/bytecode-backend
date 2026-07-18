import {
  Brain,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function ReasoningCard({ form, level }) {
  const reasons = [];

  if (Number(form.amount) > 50000)
    reasons.push("High transaction amount detected.");

  if (form.device === "Unknown Device")
    reasons.push("Login from an unknown device.");

  if (form.location === "Outside India")
    reasons.push("Access attempt outside trusted region.");

  if (form.loginTime === "Late Night")
    reasons.push("Login during unusual hours.");

  if (reasons.length === 0)
    reasons.push("No abnormal behaviour detected.");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-violet-100 p-3">
          <Brain className="text-violet-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            AI Reasoning
          </h2>

          <p className="text-sm text-slate-500">
            Why this authentication decision was taken
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {reasons.map((reason) => (
          <div
            key={reason}
            className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
          >
            <CheckCircle2
              className="mt-0.5 text-green-600"
              size={18}
            />

            <p className="text-slate-700">
              {reason}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`mt-6 rounded-xl border p-4 ${
          level === "High"
            ? "border-red-200 bg-red-50"
            : level === "Medium"
            ? "border-yellow-200 bg-yellow-50"
            : "border-green-200 bg-green-50"
        }`}
      >
        <div className="flex items-center gap-2">
          <AlertTriangle
            className={
              level === "High"
                ? "text-red-600"
                : level === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }
            size={18}
          />

          <span
            className={`font-semibold ${
              level === "High"
                ? "text-red-700"
                : level === "Medium"
                ? "text-yellow-700"
                : "text-green-700"
            }`}
          >
            Overall AI Assessment: {level} Risk
          </span>
        </div>
      </div>
    </div>
  );
}