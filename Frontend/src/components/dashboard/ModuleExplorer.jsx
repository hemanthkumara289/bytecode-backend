import { useNavigate } from "react-router-dom";
import {
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

export default function ModuleExplorer() {
  const navigate = useNavigate();

  const modules = [
    {
      title: "Applications",
      description: "Manage registered client applications",
      value: "24 Apps",
      icon: AppWindow,
      color: "bg-blue-100 text-blue-600",
      route: "/applications",
    },
    {
      title: "Users",
      description: "View and manage user accounts",
      value: "12,847 Users",
      icon: Users,
      color: "bg-green-100 text-green-600",
      route: "/users",
    },
    {
      title: "Policy Builder",
      description: "Configure adaptive authentication",
      value: "18 Policies",
      icon: ShieldCheck,
      color: "bg-purple-100 text-purple-600",
      route: "/policies",
    },
    {
      title: "Simulation",
      description: "Test authentication scenarios",
      value: "126 Runs",
      icon: FlaskConical,
      color: "bg-orange-100 text-orange-600",
      route: "/simulation",
    },
    {
      title: "Audit Logs",
      description: "Review security events",
      value: "4.2K Events",
      icon: ScrollText,
      color: "bg-red-100 text-red-600",
      route: "/audit-logs",
    },
    {
      title: "Analytics",
      description: "Authentication insights & reports",
      value: "98.4% Success",
      icon: BarChart3,
      color: "bg-cyan-100 text-cyan-600",
      route: "/analytics",
    },
    {
      title: "API Keys",
      description: "Manage API credentials",
      value: "43 Keys",
      icon: KeyRound,
      color: "bg-yellow-100 text-yellow-700",
      route: "/api-keys",
    },
    {
      title: "Roles",
      description: "Access control & permissions",
      value: "5 Roles",
      icon: UserCog,
      color: "bg-indigo-100 text-indigo-600",
      route: "/roles-permissions",
    },
    {
      title: "Settings",
      description: "Platform configuration",
      value: "Healthy",
      icon: Settings,
      color: "bg-slate-200 text-slate-700",
      route: "/settings",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800">
          Platform Modules
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Quickly access and manage every SecureAuth service from one place.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <button
            key={module.title}
            onClick={() => navigate(module.route)}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${module.color}`}
              >
                <module.icon size={28} />
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {module.value}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-800 group-hover:text-blue-600">
              {module.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {module.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}