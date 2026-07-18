import {
  Lock,
  Smartphone,
  UserCheck,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const icons = {
  Password: Lock,
  OTP: Smartphone,
  "Manager Approval": UserCheck,
  "Access Granted": CheckCircle2,
};

export default function AuthFlow({ flow, decision }) {
  const steps = [...flow];

  if (decision === "Access Granted") {
    steps.push("Access Granted");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Authentication Flow
      </h2>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = icons[step];

          return (
            <div key={step}>
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Icon className="text-blue-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {step}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {step === "Password" &&
                      "Primary authentication"}

                    {step === "OTP" &&
                      "One-Time Password Verification"}

                    {step === "Manager Approval" &&
                      "Administrative confirmation required"}

                    {step === "Access Granted" &&
                      "Authentication completed successfully"}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown
                    className="text-slate-400"
                    size={18}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}