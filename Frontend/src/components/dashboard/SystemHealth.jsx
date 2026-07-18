import {
  CheckCircle2,
  Database,
  ShieldCheck,
  BarChart3,
  KeyRound,
  Users,
  ScrollText,
} from "lucide-react";

const services = [
  {
    name: "Authentication Service",
    icon: ShieldCheck,
    uptime: "99.99%",
    response: "21 ms",
    status: "Healthy",
  },
  {
    name: "Policy Engine",
    icon: CheckCircle2,
    uptime: "99.97%",
    response: "18 ms",
    status: "Healthy",
  },
  {
    name: "User Directory",
    icon: Users,
    uptime: "99.98%",
    response: "24 ms",
    status: "Healthy",
  },
  {
    name: "API Gateway",
    icon: KeyRound,
    uptime: "99.95%",
    response: "31 ms",
    status: "Healthy",
  },
  {
    name: "Analytics Engine",
    icon: BarChart3,
    uptime: "99.96%",
    response: "27 ms",
    status: "Healthy",
  },
  {
    name: "Audit Service",
    icon: ScrollText,
    uptime: "99.94%",
    response: "22 ms",
    status: "Healthy",
  },
  {
    name: "Database",
    icon: Database,
    uptime: "99.99%",
    response: "12 ms",
    status: "Healthy",
  },
];

export default function SystemHealth() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Platform Health
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Live operational status of SecureAuth platform services.
          </p>
        </div>

        <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          All Systems Operational
        </div>
      </div>

      {/* Services */}

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-blue-400 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <service.icon
                  size={28}
                  className="text-green-600"
                />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Running normally
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Status
                </p>

                <span className="mt-1 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  {service.status}
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Uptime
                </p>

                <h4 className="mt-1 text-lg font-bold text-slate-800">
                  {service.uptime}
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Response
                </p>

                <h4 className="mt-1 text-lg font-bold text-slate-800">
                  {service.response}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}