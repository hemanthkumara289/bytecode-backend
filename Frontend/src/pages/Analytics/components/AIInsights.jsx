import {
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react";

import { aiInsights } from "../data";

const icons = [
  TrendingUp,
  Shield,
  Sparkles,
];

export default function AIInsights() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            AI Security Insights
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Intelligent recommendations generated from authentication patterns
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
          <Brain
            size={24}
            className="text-violet-600"
          />
        </div>
      </div>

      {/* Insights */}
      <div className="space-y-4">
        {aiInsights.map((insight, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={insight.id}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-violet-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <Icon
                    size={22}
                    className="text-violet-600"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {insight.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {insight.description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                    <Sparkles size={14} />
                    AI Recommendation
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-violet-700">
          <Brain size={20} />
          Adaptive Authentication Recommendation
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Based on recent authentication trends, SecureAuth recommends enabling
          stricter verification for first-time devices, VPN connections, and
          logins originating from high-risk regions. These adjustments can
          significantly reduce unauthorized access while maintaining a seamless
          experience for trusted users.
        </p>
      </div>
    </div>
  );
}