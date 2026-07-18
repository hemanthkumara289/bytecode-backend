import { Users, Edit2, Trash2, Mail } from "lucide-react";
import { assignedUsers } from "../data";

export default function UserAssignments() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 p-6">
        <Users className="text-blue-600" size={24} />

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            User Assignments
          </h2>

          <p className="text-sm text-slate-500">
            View and manage role assignments for platform users.
          </p>
        </div>
      </div>

      {/* Users List */}
      <div className="divide-y divide-slate-200">
        {assignedUsers.map((user) => (
          <div
            key={user.id}
            className="flex flex-col gap-5 p-6 transition hover:bg-slate-50 lg:flex-row lg:items-center lg:justify-between"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                {user.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  {user.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <Mail size={15} />
                  {user.email}
                </div>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {user.role}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Active
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="rounded-xl p-2 transition hover:bg-slate-100"
                title="Edit Role"
              >
                <Edit2
                  size={18}
                  className="text-blue-600"
                />
              </button>

              <button
                className="rounded-xl p-2 transition hover:bg-red-100"
                title="Remove Assignment"
              >
                <Trash2
                  size={18}
                  className="text-red-600"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}