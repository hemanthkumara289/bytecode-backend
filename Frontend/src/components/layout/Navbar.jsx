import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">
          SecureAuth
        </h1>
        <p className="text-sm text-slate-500">
          Adaptive Authentication Platform
        </p>
      </div>

      {/* Center */}
      <div className="hidden md:flex w-96">
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="relative rounded-full p-2 hover:bg-slate-100 transition">
          <Bell size={20} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle2
            size={38}
            className="text-blue-600"
          />

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-800">
              Admin
            </p>
            <p className="text-xs text-slate-500">
              SecureAuth Console
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}