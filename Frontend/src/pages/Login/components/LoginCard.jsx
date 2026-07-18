import {
  ShieldCheck,
  Lock,
  Fingerprint,
  Globe,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Adaptive Authentication",
    description: "Continuously evaluates login risk using contextual signals.",
  },
  {
    icon: Fingerprint,
    title: "Risk-Based Access",
    description: "Device, location and behaviour determine authentication steps.",
  },
  {
    icon: Globe,
    title: "Global Threat Intelligence",
    description: "Detect suspicious IPs, impossible travel and anomalous logins.",
  },
];

export default function LoginCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 text-white shadow-2xl">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
            <Lock size={30} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">SecureAuth</h1>
            <p className="text-blue-100">
              Policy-Driven Adaptive Authentication
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium">
            <Sparkles size={16} />
            Enterprise Identity Platform
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            Secure every login
            <br />
            with intelligent
            <span className="text-blue-300"> adaptive authentication.</span>
          </h2>

          <p className="mt-5 text-blue-100 leading-7">
            Protect enterprise applications using contextual risk analysis,
            adaptive MFA, policy-driven decisions, and real-time threat
            intelligence.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-blue-100">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 p-4 text-center border border-white/10">
            <h3 className="text-2xl font-bold">99.9%</h3>
            <p className="text-xs text-blue-100 mt-1">
              Threat Detection
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-4 text-center border border-white/10">
            <h3 className="text-2xl font-bold">&lt;150ms</h3>
            <p className="text-xs text-blue-100 mt-1">
              Risk Evaluation
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-4 text-center border border-white/10">
            <h3 className="text-2xl font-bold">24×7</h3>
            <p className="text-xs text-blue-100 mt-1">
              Continuous Monitoring
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}