import {
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

export default function Timeline({ flow, decision }) {
  const currentTime = new Date();

  const steps = [...flow];

  if (decision === "Access Granted") {
    steps.push("Access Granted");
  }

  const getTime = (index) => {
    const time = new Date(currentTime.getTime() + index * 15000);

    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Authentication Timeline
      </h2>

      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={step}>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-2">
                <CheckCircle2
                  className="text-green-600"
                  size={18}
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-400">
                  {getTime(index)}
                </p>

                <h3 className="font-semibold text-slate-800">
                  {step}
                </h3>

                <p className="text-sm text-slate-500">
                  Successfully completed.
                </p>
              </div>
            </div>

            {index !== steps.length - 1 && (
              <div className="ml-5 flex h-8 items-center">
                <ArrowDown
                  className="text-slate-300"
                  size={18}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}