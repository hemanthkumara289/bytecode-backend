import {
  KeyRound,
  ShieldCheck,
  Activity,
  TrendingUp,
  Plus,
  Globe,
} from "lucide-react";

import { apiKeys, oauthClients, usageAnalytics } from "../data";

export default function HeroHeader() {
  const stats = [
    {
      title: "API Keys",
      value: apiKeys.length,
      icon: KeyRound,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "OAuth Clients",
      value: oauthClients.length,
      icon: ShieldCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "API Requests",
      value: usageAnalytics.totalRequests,
      icon: Activity,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Success Rate",
      value: usageAnalytics.successRate,
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-lg">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            API Keys & OAuth Clients
          </h1>

          <p className="mt-2 max-w-3xl text-slate-300">
            Securely manage API credentials, register OAuth applications,
            monitor usage analytics, and control access for all connected
            services across your organization.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700">
            <Plus size={18} />
            Generate API Key
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 font-semibold transition hover:bg-slate-800">
            <Globe size={18} />
            Register OAuth Client
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}