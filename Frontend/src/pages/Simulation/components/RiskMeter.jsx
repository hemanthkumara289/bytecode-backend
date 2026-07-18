export default function RiskMeter({ score, level }) {
  const color =
    level === "High"
      ? "bg-red-500"
      : level === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500";

  const textColor =
    level === "High"
      ? "text-red-600"
      : level === "Medium"
      ? "text-yellow-600"
      : "text-green-600";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            AI Risk Score
          </p>

          <h2 className="mt-1 text-4xl font-bold text-slate-800">
            {score}
            <span className="text-xl text-slate-400">/100</span>
          </h2>
        </div>

        <div
          className={`rounded-full px-4 py-2 text-sm font-semibold ${textColor} bg-slate-100`}
        >
          {level.toUpperCase()} RISK
        </div>
      </div>

      <div className="mt-6">
        <div className="h-4 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full ${color} transition-all duration-700`}
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        {level === "Low" && (
          <p className="text-green-700">
            ✅ Low risk detected. Standard authentication is sufficient.
          </p>
        )}

        {level === "Medium" && (
          <p className="text-yellow-700">
            ⚠ Moderate risk detected. Additional verification is recommended.
          </p>
        )}

        {level === "High" && (
          <p className="text-red-700">
            🚨 High risk detected. Multi-step authentication is required.
          </p>
        )}
      </div>
    </div>
  );
}