import {
  ShieldCheck,
  Users,
  UserCog,
  BadgeCheck,
  Plus,
} from "lucide-react";

import { roleStats } from "../data";

export default function HeroHeader() {
  const stats = [
    {
      title: "Total Roles",
      value: roleStats.totalRoles,
      icon: ShieldCheck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Users",
      value: roleStats.activeUsers,
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Custom Roles",
      value: roleStats.customRoles,
      icon: UserCog,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Permission Coverage",
      value: roleStats.permissionCoverage,
      icon: BadgeCheck,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Roles & Permissions
          </h1>

          <p className="mt-2 text-slate-600">
            Manage user roles, permissions, and access control across your
            SecureAuth platform.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Plus size={18} />
          Create Role
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}