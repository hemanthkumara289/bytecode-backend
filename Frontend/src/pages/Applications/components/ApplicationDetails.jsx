import { Copy, KeyRound, ShieldCheck, Link2 } from "lucide-react";

export default function ApplicationDetails({ app }) {
  if (!app) return null;

  const copy = (text) => navigator.clipboard.writeText(text);

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 space-y-5">
      <h2 className="text-xl font-semibold">{app.name}</h2>

      <div>
        <p className="text-sm text-slate-500 flex items-center gap-2">
          <KeyRound size={16} />
          Client ID
        </p>

        <div className="flex justify-between items-center mt-2 bg-slate-100 rounded-lg p-3">
          <span className="text-sm">{app.clientId}</span>

          <button onClick={() => copy(app.clientId)}>
            <Copy size={16} />
          </button>
        </div>
      </div>

      <div>
        <p className="text-sm text-slate-500 flex items-center gap-2">
          <ShieldCheck size={16} />
          Client Secret
        </p>

        <div className="flex justify-between items-center mt-2 bg-slate-100 rounded-lg p-3">
          <span>{app.clientSecret}</span>

          <button onClick={() => copy(app.clientSecret)}>
            <Copy size={16} />
          </button>
        </div>
      </div>

      <div>
        <p className="text-sm text-slate-500 flex items-center gap-2">
          <Link2 size={16} />
          Redirect URI
        </p>

        <div className="bg-slate-100 rounded-lg p-3 mt-2 text-sm break-all">
          {app.redirectUri}
        </div>
      </div>

      <div>
        <p className="text-sm text-slate-500">Assigned Policy</p>

        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
          {app.policy}
        </span>
      </div>
    </div>
  );
}