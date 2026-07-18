import { Search, UserPlus, Users } from "lucide-react";

export default function HeroHeader({
  search,
  setSearch,
  onInvite,
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-100">
              <Users className="text-blue-600" size={28} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Users
              </h1>

              <p className="text-slate-500 mt-1">
                Manage users, monitor account status, and control access across all applications.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onInvite}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition"
        >
          <UserPlus size={18} />
          Invite User
        </button>
      </div>

      <div className="mt-6 relative max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}