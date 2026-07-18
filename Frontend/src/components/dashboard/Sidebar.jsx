import { NavLink, useNavigate } from "react-router-dom";
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
  Shield,
  LogOut,
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
    badge: "NEW",
  },
  {
    title: "Audit Logs",
    icon: FileText,
    path: "/audit-logs",
    badge: "12",
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
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("authenticated");
    localStorage.removeItem("authenticated");

    navigate("/login");
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white shadow-xl">

      {/* Logo */}

      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-lg">
            <Shield size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              SecureAuth
            </h1>

            <p className="text-xs text-slate-500">
              Policy-Driven Adaptive Authentication
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Platform
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `group relative mb-2 flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 hover:translate-x-1"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 h-8 w-1 rounded-r-full bg-white" />
                  )}

                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>

                  {item.badge && (
                    <span
                      className={`ml-auto rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.badge === "NEW"
                          ? "bg-green-500 text-white"
                          : isActive
                          ? "bg-white text-blue-600"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User */}

      <div className="border-t border-slate-200 p-5">

        <div className="rounded-2xl bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <UserCircle
              size={48}
              className="text-slate-500"
            />

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

                <span className="text-xs font-semibold text-green-600">
                  Online
                </span>

              </div>

              <h3 className="mt-1 font-semibold text-slate-800">
                System Administrator
              </h3>

              <p className="text-sm text-slate-500">
                admin@secureauth.io
              </p>

              <span className="mt-2 inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                ADMIN
              </span>

            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-medium text-red-600 transition hover:bg-red-100"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          SecureAuth v1.0.0 • Hackathon Edition
        </p>

      </div>
    </aside>
  );
}