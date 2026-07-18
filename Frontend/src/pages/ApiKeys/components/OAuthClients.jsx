import {
  ShieldCheck,
  ExternalLink,
  Pencil,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { oauthClients } from "../data";

export default function OAuthClients() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            OAuth Clients
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Registered applications that authenticate using OAuth 2.0 and
            OpenID Connect.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
          Register Client
        </button>
      </div>

      {/* Clients */}
      <div className="divide-y divide-slate-200">
        {oauthClients.map((client) => (
          <div
            key={client.id}
            className="p-6 transition hover:bg-slate-50"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Left */}
              <div className="flex flex-1 gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <ShieldCheck
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-800">
                        {client.name}
                      </h3>

                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        <CheckCircle2 size={15} />
                        {client.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      OAuth 2.0 / OpenID Connect Client
                    </p>
                  </div>

                  {/* Details */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Client ID
                      </p>

                      <code className="mt-1 block rounded-lg bg-slate-100 p-2 text-xs text-slate-700">
                        {client.clientId}
                      </code>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Client Secret
                      </p>

                      <code className="mt-1 block rounded-lg bg-slate-100 p-2 text-xs text-slate-700">
                        {client.clientSecret}
                      </code>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Redirect URI
                      </p>

                      <div className="mt-1 flex items-center gap-2 rounded-lg bg-slate-100 p-2 text-sm text-slate-700">
                        <ExternalLink size={16} />
                        <span className="truncate">
                          {client.redirectUri}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Allowed Scopes
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {client.scopes.map((scope) => (
                          <span
                            key={scope}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                          >
                            {scope}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100">
                  <Pencil size={18} />
                </button>

                <button className="rounded-xl border border-red-300 p-3 text-red-600 transition hover:bg-red-50">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}