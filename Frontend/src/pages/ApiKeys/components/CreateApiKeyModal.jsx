import { useState } from "react";
import { X, KeyRound } from "lucide-react";

export default function CreateApiKeyModal({
  isOpen = false,
  onClose = () => {},
}) {
  const [form, setForm] = useState({
    name: "",
    expiration: "365 Days",
    description: "",
    scopes: ["Read"],
  });

  const scopeOptions = [
    "Read",
    "Write",
    "Delete",
    "Admin",
    "Analytics",
  ];

  const toggleScope = (scope) => {
    if (form.scopes.includes(scope)) {
      setForm({
        ...form,
        scopes: form.scopes.filter((s) => s !== scope),
      });
    } else {
      setForm({
        ...form,
        scopes: [...form.scopes, scope],
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-100 p-3">
              <KeyRound className="text-blue-600" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Generate API Key
              </h2>

              <p className="text-sm text-slate-500">
                Create a new API key for your application.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              API Key Name
            </label>

            <input
              type="text"
              placeholder="Production API"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Expiration
            </label>

            <select
              value={form.expiration}
              onChange={(e) =>
                setForm({
                  ...form,
                  expiration: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option>30 Days</option>
              <option>90 Days</option>
              <option>180 Days</option>
              <option>365 Days</option>
              <option>Never</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-slate-700">
              Permissions / Scopes
            </label>

            <div className="flex flex-wrap gap-3">
              {scopeOptions.map((scope) => (
                <button
                  key={scope}
                  type="button"
                  onClick={() => toggleScope(scope)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    form.scopes.includes(scope)
                      ? "bg-blue-600 text-white"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {scope}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Describe the purpose of this API key..."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-200 p-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-100"
          >
            Cancel
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            Generate API Key
          </button>
        </div>
      </div>
    </div>
  );
}