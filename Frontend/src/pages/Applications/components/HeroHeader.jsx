import { Plus } from "lucide-react";

export default function HeroHeader({ onAdd }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl border p-6 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Applications
        </h1>

        <p className="text-slate-500 mt-2">
          Manage client applications integrated with SecureAuth.
        </p>
      </div>

      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
      >
        <Plus size={18} />
        Register Application
      </button>
    </div>
  );
}