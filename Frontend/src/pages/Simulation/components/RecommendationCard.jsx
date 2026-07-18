import {
  ShieldCheck,
  Bell,
  Eye,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

export default function RecommendationCard({ level }) {
  const recommendations = [];

  if (level === "Low") {
    recommendations.push(
      "Allow standard password authentication.",
      "Log authentication event.",
      "Continue normal session monitoring."
    );
  }

  if (level === "Medium") {
    recommendations.push(
      "Require OTP verification.",
      "Log authentication event.",
      "Increase session monitoring.",
      "Notify security dashboard."
    );
  }

  if (level === "High") {
    recommendations.push(
      "Require OTP verification.",
      "Require Manager Approval.",
      "Notify Security Administrator.",
      "Enable continuous session monitoring."
    );
  }

  const icons = [
    ShieldCheck,
    ClipboardCheck,
    Bell,
    Eye,
  ];

  const confidence =
    level === "High"
      ? "98.4%"
      : level === "Medium"
      ? "91.8%"
      : "99.6%";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <Sparkles className="text-blue-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            AI Recommendation
          </h2>

          <p className="text-sm text-slate-500">
            Suggested security actions
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => {
          const Icon = icons[index] || ShieldCheck;

          return (
            <div
              key={item}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
            >
              <div className="rounded-lg bg-blue-100 p-2">
                <Icon
                  className="text-blue-600"
                  size={18}
                />
              </div>

              <span className="text-slate-700">
                {item}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm text-slate-500">
          AI Confidence Score
        </p>

        <h3 className="mt-2 text-3xl font-bold text-blue-700">
          {confidence}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          The engine is highly confident in this authentication decision.
        </p>
      </div>
    </div>
  );
}