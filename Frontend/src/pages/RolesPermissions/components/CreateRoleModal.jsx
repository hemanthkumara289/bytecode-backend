import { useState } from "react";
import { X, ShieldPlus } from "lucide-react";
import { permissions } from "../data";

export default function CreateRoleModal({
  isOpen = false,
  onClose = () => {},
}) {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const togglePermission = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions((prev) =>
        prev.filter((item) => item !== permission)
      );
    } else {
      setSelectedPermissions((prev) => [...prev, permission]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-100 p-3">
              <ShieldPlus className="text-blue-600" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Create New Role
              </h2>

              <p className="text-sm text-slate-500">
                Define a new role and assign platform permissions.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Role Name
            </label>

            <input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              placeholder="Example: Support Manager"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the responsibilities of this role..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-4 block text-sm font-medium text-slate-700">
              Select Permissions
            </label>

            <div className="grid gap-3 md:grid-cols-2">
              {permissions.map((permission) => (
                <label
                  key={permission}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(permission)}
                    onChange={() => togglePermission(permission)}
                    className="h-4 w-4 accent-blue-600"
                  />

                  <span className="font-medium text-slate-700">
                    {permission}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <h4 className="mb-2 font-semibold text-slate-800">
              Selected Permissions
            </h4>

            {selectedPermissions.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedPermissions.map((permission) => (
                  <span
                    key={permission}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                No permissions selected.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-200 p-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Create Role
          </button>
        </div>
      </div>
    </div>
  );
}