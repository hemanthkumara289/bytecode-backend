import { useNavigate } from "react-router-dom";
import {
  Plus,
  ShieldCheck,
  Play,
  Users,
  KeyRound,
  UserCog,
} from "lucide-react";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Register Application",
      description: "Add a new client application",
      icon: Plus,
      color: "bg-blue-100 text-blue-600",
      route: "/applications",
    },
    {
      title: "Add User",
      description: "Create a new user account",
      icon: Users,
      color: "bg-green-100 text-green-600",
      route: "/users",
    },
    {
      title: "Create Policy",
      description: "Configure adaptive rules",
      icon: ShieldCheck,
      color: "bg-purple-100 text-purple-600",
      route: "/policies",
    },
    {
      title: "Run Simulation",
      description: "Test authentication flow",
      icon: Play,
      color: "bg-orange-100 text-orange-600",
      route: "/simulation",
    },
    {
      title: "Generate API Key",
      description: "Create secure API credentials",
      icon: KeyRound,
      color: "bg-yellow-100 text-yellow-700",
      route: "/api-keys",
    },
    {
      title: "Create Role",
      description: "Manage permissions",
      icon: UserCog,
      color: "bg-indigo-100 text-indigo-600",
      route: "/roles-permissions",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used administrative tasks.
        </p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.route)}
            className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-slate-50 hover:shadow-md"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${action.color}`}
            >
              <action.icon size={20} />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-slate-800 group-hover:text-blue-600">
                {action.title}
              </h3>

              <p className="text-xs text-slate-500">
                {action.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}