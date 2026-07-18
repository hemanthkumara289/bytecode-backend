import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  UserCircle,
  Plus,
  ShieldCheck,
} from "lucide-react";

export default function Topbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = currentTime.getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="sticky top-0 z-20 flex h-24 items-center justify-between border-b border-slate-200 bg-white/95 px-8 backdrop-blur">
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {greeting}, Admin 👋
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          {formattedDate} • {formattedTime}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <ShieldCheck
            size={16}
            className="text-green-600"
          />

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Adaptive Authentication Engine Online
          </span>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="flex w-80 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-blue-500 focus-within:bg-white focus-within:shadow-md">
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search users, applications, policies..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Quick Action */}

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          <Plus size={18} />
          New Policy
        </button>

        {/* Notifications */}

        <button className="relative rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            5
          </span>
        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:border-blue-500 hover:shadow-md">
          <div className="relative">
            <UserCircle
              size={40}
              className="text-slate-500"
            />

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-slate-800">
              Admin
            </h3>

            <p className="text-sm text-slate-500">
              Security Administrator
            </p>
          </div>
        </button>

      </div>
    </header>
  );
}