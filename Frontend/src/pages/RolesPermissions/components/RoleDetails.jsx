import {
  ShieldCheck,
  Users,
  KeyRound,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { roles } from "../data";

export default function RoleDetails() {
  const selectedRole = roles[0];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 p-6">
        <ShieldCheck className="text-blue-600" size={24} />

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Role Details
          </h2>

          <p className="text-sm text-slate-500">
            Overview of the selected role and its access privileges.
          </p>
        </div>
      </div>

      <div className="space-y-8 p-6">
        {/* Role Information */}
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedRole.name}
              </h3>

              <p className="mt-2 text-slate-600">
                {selectedRole.description}
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {selectedRole.status}
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <Users className="text-blue-600" size={24} />

              <div>
                <p className="text-sm text-slate-500">
                  Assigned Users
                </p>

                <h4 className="text-2xl font-bold text-slate-900">
                  {selectedRole.users}
                </h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <KeyRound className="text-purple-600" size={24} />

              <div>
                <p className="text-sm text-slate-500">
                  Permissions
                </p>

                <h4 className="text-2xl font-bold text-slate-900">
                  {selectedRole.permissions}
                </h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-green-600" size={24} />

              <div>
                <p className="text-sm text-slate-500">
                  Created
                </p>

                <h4 className="text-lg font-semibold text-slate-900">
                  12 Mar 2026
                </h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <Clock3 className="text-orange-600" size={24} />

              <div>
                <p className="text-sm text-slate-500">
                  Last Updated
                </p>

                <h4 className="text-lg font-semibold text-slate-900">
                  3 Days Ago
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Permissions Summary */}
        <div className="rounded-2xl bg-slate-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-slate-800">
            Role Summary
          </h3>

          <ul className="space-y-3 text-slate-600">
            <li>
              • This role provides access to{" "}
              <strong>{selectedRole.permissions}</strong> platform
              permissions.
            </li>

            <li>
              • Currently assigned to{" "}
              <strong>{selectedRole.users}</strong> active users.
            </li>

            <li>
              • Recommended for administrators requiring elevated
              privileges within SecureAuth.
            </li>

            <li>
              • Regularly review role assignments to maintain least
              privilege access.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}