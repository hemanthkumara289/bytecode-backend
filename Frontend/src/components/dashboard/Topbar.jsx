import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2">
          <Search className="text-slate-400" size={18} />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Notification */}

        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Bell size={20} />
        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:bg-slate-100">
          <UserCircle size={34} />

          <div className="text-left">
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-slate-500">
              Super Admin
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}