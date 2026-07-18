import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  AppWindow,
  Users,
  ShieldCheck,
  FlaskConical,
  FileText,
  BarChart3,
  KeyRound,
  UserCog,
  Settings,
  UserCircle,
} from "lucide-react";

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
    icon: FileText,
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
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}

      <div className="border-b border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-blue-600">
          SecureAuth
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Adaptive Authentication Platform
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
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

      {/* User */}

      <div className="border-t border-slate-200 p-5">
        <div className="flex items-center gap-3">
          <UserCircle
            size={42}
            className="text-slate-500"
          />

          <div>
            <h3 className="font-semibold text-slate-800">
              System Administrator
            </h3>

            <p className="text-sm text-slate-500">
              admin@secureauth.io
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}