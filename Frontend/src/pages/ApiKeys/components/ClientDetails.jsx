import {
  Globe,
  ShieldCheck,
  Clock3,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

export default function ClientDetails() {
  const allowedOrigins = [
    "https://dashboard.secureauth.com",
    "https://admin.secureauth.com",
    "https://app.secureauth.com",
  ];

  const grantTypes = [
    "Authorization Code",
    "Refresh Token",
    "Client Credentials",
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800">
          Client Configuration
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Security configuration for the selected OAuth client.
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-2">
        {/* Allowed Origins */}
        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center gap-3">
            <Globe className="text-blue-600" size={22} />

            <h3 className="font-semibold text-slate-800">
              Allowed Origins
            </h3>
          </div>

          <div className="space-y-3">
            {allowedOrigins.map((origin) => (
              <div
                key={origin}
                className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700"
              >
                {origin}
              </div>
            ))}
          </div>
        </div>

        {/* Grant Types */}
        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={22} />

            <h3 className="font-semibold text-slate-800">
              Grant Types
            </h3>
          </div>

          <div className="space-y-3">
            {grantTypes.map((grant) => (
              <div
                key={grant}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />

                <span className="text-slate-700">
                  {grant}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Token Settings */}
        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center gap-3">
            <Clock3 className="text-orange-600" size={22} />

            <h3 className="font-semibold text-slate-800">
              Token Lifetime
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <span>Access Token</span>

              <span className="font-semibold text-slate-700">
                60 Minutes
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <span>ID Token</span>

              <span className="font-semibold text-slate-700">
                60 Minutes
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <span>Refresh Token</span>

              <span className="font-semibold text-slate-700">
                30 Days
              </span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center gap-3">
            <RefreshCw className="text-purple-600" size={22} />

            <h3 className="font-semibold text-slate-800">
              Security Features
            </h3>
          </div>

          <div className="space-y-4">
            {[
              "PKCE Enabled",
              "Refresh Token Rotation",
              "JWT Access Tokens",
              "OIDC Compliance",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-between rounded-xl bg-slate-100 p-3"
              >
                <span>{feature}</span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Enabled
                </span>
              </div>
            ))}
          </div>
        </div>
            </div>
    </div>
  );
}