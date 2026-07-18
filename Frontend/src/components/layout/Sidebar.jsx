import {
  LayoutDashboard,
  AppWindow,
  Users,
  ShieldCheck,
  FlaskConical,
  ScrollText,
  BarChart3,
  KeyRound,
  UserCog,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Applications",
    icon: AppWindow,
    path: "/applications",
  },
  {
    title: "Users",
    icon: Users,
    path: "/users",
  },
  {
    title: "Policy Builder",
    icon: ShieldCheck,
    path: "/policies",
  },
  {
    title: "Simulation",
    icon: FlaskConical,
    path: "/simulation",
  },
  {
    title: "Audit Logs",
    icon: ScrollText,
    path: "/audit-logs",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "API Keys",
    icon: KeyRound,
    path: "/api-keys",
  },
  {
    title: "Roles & Permissions",
    icon: UserCog,
    path: "/roles-permissions",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-blue-600">
          SecureAuth
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="font-semibold text-slate-700">
            SecureAuth Platform
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Adaptive Authentication
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Version 1.0.0
          </p>
        </div>
      </div>
    </aside>
  );
}