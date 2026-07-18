import {
  Copy,
  RotateCw,
  Ban,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { apiKeys } from "../data";

export default function ApiKeysTable() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            API Keys
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage API credentials used by your applications and services.
          </p>
        </div>

        <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
          View Documentation
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-600">
              <th className="px-6 py-4 font-semibold">API Key</th>
              <th className="px-6 py-4 font-semibold">Created</th>
              <th className="px-6 py-4 font-semibold">Last Used</th>
              <th className="px-6 py-4 font-semibold">Expiry</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 text-center font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {apiKeys.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                {/* Key */}
                <td className="px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {item.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <code className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">
                        {item.key}
                      </code>

                      <button
                        className="rounded-lg p-1 transition hover:bg-slate-200"
                        title="Copy API Key"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </td>

                {/* Created */}
                <td className="px-6 py-5 text-sm text-slate-600">
                  {item.created}
                </td>

                {/* Last Used */}
                <td className="px-6 py-5 text-sm text-slate-600">
                  {item.lastUsed}
                </td>

                {/* Expiry */}
                <td className="px-6 py-5 text-sm text-slate-600">
                  {item.expires}
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  {item.status === "Active" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      <CheckCircle2 size={16} />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                      <XCircle size={16} />
                      Revoked
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="rounded-xl border border-slate-300 p-2 transition hover:bg-slate-100"
                      title="Rotate Key"
                    >
                      <RotateCw size={18} />
                    </button>

                    <button
                      className="rounded-xl border border-red-300 p-2 text-red-600 transition hover:bg-red-50"
                      title="Revoke Key"
                    >
                      <Ban size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <p className="text-sm text-slate-500">
          Rotate API keys periodically and revoke unused credentials to maintain
          the security of your applications.
        </p>
      </div>
    </div>
  );
}