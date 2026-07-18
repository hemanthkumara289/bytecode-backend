import { Edit2, Eye, Trash2, ShieldCheck } from "lucide-react";
import { roles } from "../data";

export default function RolesTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 p-6">
        <ShieldCheck className="text-blue-600" size={24} />

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Roles Directory
          </h2>

          <p className="text-sm text-slate-500">
            Manage platform roles and access privileges.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm font-semibold text-slate-600">
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Users</th>
              <th className="px-6 py-4">Permissions</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {roles.map((role) => (
              <tr
                key={role.id}
                className="transition hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {role.name}
                    </h3>
                  </div>
                </td>

                <td className="max-w-sm px-6 py-5 text-sm text-slate-600">
                  {role.description}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {role.users}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                    {role.permissions}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {role.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="rounded-lg p-2 transition hover:bg-slate-100"
                      title="View"
                    >
                      <Eye
                        size={18}
                        className="text-slate-600"
                      />
                    </button>

                    <button
                      className="rounded-lg p-2 transition hover:bg-slate-100"
                      title="Edit"
                    >
                      <Edit2
                        size={18}
                        className="text-blue-600"
                      />
                    </button>

                    <button
                      className="rounded-lg p-2 transition hover:bg-red-100"
                      title="Delete"
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}