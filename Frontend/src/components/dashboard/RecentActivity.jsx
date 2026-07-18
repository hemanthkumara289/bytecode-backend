import {
  UserPlus,
  ShieldCheck,
  KeyRound,
  FlaskConical,
  UserCog,
  AlertTriangle,
} from "lucide-react";

const activities = [
  {
    title: "New User Registered",
    description: "John Mathew was added to the Finance application.",
    time: "2 mins ago",
    icon: UserPlus,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Policy Updated",
    description: "Adaptive MFA policy was modified by Admin.",
    time: "8 mins ago",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "API Key Generated",
    description: "Production API key created for CRM Service.",
    time: "15 mins ago",
    icon: KeyRound,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Simulation Completed",
    description: "High-risk login scenario executed successfully.",
    time: "28 mins ago",
    icon: FlaskConical,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Role Assigned",
    description: "Support Engineer role assigned to Sarah.",
    time: "42 mins ago",
    icon: UserCog,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "High-Risk Login Blocked",
    description: "Authentication attempt blocked from unknown device.",
    time: "1 hour ago",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest security and administration events across the platform.
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${activity.color}`}
            >
              <activity.icon size={20} />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-slate-800">
                {activity.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {activity.description}
              </p>
            </div>

            <span className="whitespace-nowrap text-xs text-slate-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}