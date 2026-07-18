import { Download, ShieldCheck } from "lucide-react";

export default function HeroHeader() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-xl">
            <ShieldCheck className="text-blue-600" size={24} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Audit Logs
            </h1>

            <p className="text-slate-500 mt-1">
              Monitor every authentication request across all registered applications.
            </p>
          </div>
        </div>
      </div>

      <button
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
      >
        <Download size={18} />
        Export Logs
      </button>
    </div>
  );
}