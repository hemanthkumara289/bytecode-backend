import {
  Activity,
  TrendingUp,
  ShieldCheck,
  Server,
  BarChart3,
  Globe,
} from "lucide-react";

import { usageAnalytics } from "../data";

export default function UsageAnalytics() {
  const stats = [
    {
      title: "Total API Requests",
      value: usageAnalytics.totalRequests,
      icon: Activity,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Success Rate",
      value: usageAnalytics.successRate,
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Failed Requests",
      value: usageAnalytics.failedRequests,
      icon: ShieldCheck,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Active Clients",
      value: usageAnalytics.activeClients,
      icon: Server,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const topClients = [
    {
      name: "SecureAuth Dashboard",
      requests: "1.2M",
    },
    {
      name: "Mobile App",
      requests: "845K",
    },
    {
      name: "Admin Portal",
      requests: "312K",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="text-blue-600" size={24} />

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Usage Analytics
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              API usage summary across your registered applications.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 p-6">
        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-800">
                      {item.value}
                    </h3>
                  </div>

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={26} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Top Clients */}
        <div className="rounded-2xl border border-slate-200">
          <div className="border-b border-slate-200 p-5">
            <div className="flex items-center gap-2">
              <Globe className="text-green-600" size={22} />

              <h3 className="text-lg font-semibold text-slate-800">
                Top Client Applications
              </h3>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {topClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-between p-5 hover:bg-slate-50"
              >
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {client.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    OAuth Client
                  </p>
                </div>

                <span className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {client.requests}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-600">
            <strong>Last 30 Days:</strong> API traffic increased by
            <span className="font-semibold text-green-600"> 12.4%</span>,
            while authentication success remained above
            <span className="font-semibold text-blue-600"> 99.9%</span>.
            Consider rotating API keys that haven't been used recently and
            monitoring clients with unusually high request volumes.
          </p>
        </div>
      </div>
    </div>
  );
}