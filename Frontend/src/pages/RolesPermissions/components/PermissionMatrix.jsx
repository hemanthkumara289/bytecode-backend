import { Check, X, Shield } from "lucide-react";
import { permissions, roles } from "../data";

export default function PermissionMatrix() {
  const accessMatrix = {
    "Super Admin": permissions,

    "Organization Admin": [
      "Dashboard",
      "Applications",
      "Users",
      "Policies",
      "Analytics",
      "API Keys",
      "Settings",
    ],

    "Security Manager": [
      "Dashboard",
      "Users",
      "Policies",
      "Simulation",
      "Audit Logs",
      "Analytics",
    ],

    Developer: [
      "Dashboard",
      "Applications",
      "API Keys",
      "Analytics",
    ],

    Auditor: [
      "Dashboard",
      "Audit Logs",
      "Analytics",
    ],
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 p-6">
        <Shield className="text-blue-600" size={24} />

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Permission Matrix
          </h2>

          <p className="text-sm text-slate-500">
            View role-based access across all SecureAuth modules.
          </p>
        </div>
      </div>

      {/* Matrix */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="sticky left-0 bg-slate-50 px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Permission
              </th>

              {roles.map((role) => (
                <th
                  key={role.id}
                  className="px-6 py-4 text-center text-sm font-semibold text-slate-700 whitespace-nowrap"
                >
                  {role.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {permissions.map((permission) => (
              <tr
                key={permission}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                <td className="sticky left-0 bg-white px-6 py-4 font-medium text-slate-700">
                  {permission}
                </td>

                {roles.map((role) => {
                  const hasAccess =
                    accessMatrix[role.name]?.includes(permission);

                  return (
                    <td
                      key={`${role.id}-${permission}`}
                      className="px-6 py-4 text-center"
                    >
                      {hasAccess ? (
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <Check
                            size={18}
                            className="text-green-600"
                          />
                        </span>
                      ) : (
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                          <X
                            size={18}
                            className="text-red-500"
                          />
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}