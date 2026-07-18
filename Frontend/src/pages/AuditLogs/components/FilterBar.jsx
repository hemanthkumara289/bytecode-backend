import { Search, Filter } from "lucide-react";

export default function FilterBar({ search, setSearch }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
      {/* Search */}
      <div className="relative w-full lg:w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search by application, user, location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select className="border border-slate-300 rounded-lg px-3 py-2">
          <option>All Decisions</option>
          <option>Access Granted</option>
          <option>MFA Required</option>
          <option>Access Denied</option>
        </select>

        <select className="border border-slate-300 rounded-lg px-3 py-2">
          <option>All Risk Levels</option>
          <option>Low Risk</option>
          <option>Medium Risk</option>
          <option>High Risk</option>
        </select>

        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg transition">
          <Filter size={16} />
          Filter
        </button>
      </div>
    </div>
  );
}