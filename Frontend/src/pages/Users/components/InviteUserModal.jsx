import { useState } from "react";
import { X, UserPlus } from "lucide-react";

export default function InviteUserModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Employee",
    application: "SecurePay",
    mfa: true,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleInvite = () => {
    alert(
      `Invitation sent successfully!\n\nName: ${form.name}\nEmail: ${form.email}`
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Invite New User
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Role
              </label>

              <select
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-3"
              >
                <option>Super Admin</option>
                <option>Administrator</option>
                <option>Manager</option>
                <option>Employee</option>
                <option>Customer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Application
              </label>

              <select
                value={form.application}
                onChange={(e) => handleChange("application", e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-3"
              >
                <option>SecurePay</option>
                <option>HR Portal</option>
                <option>CRM</option>
                <option>Finance Portal</option>
                <option>Developer Console</option>
              </select>
            </div>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.mfa}
              onChange={(e) => handleChange("mfa", e.target.checked)}
            />

            <span className="text-slate-700">
              Enable Multi-Factor Authentication (MFA)
            </span>
          </label>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleInvite}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            <UserPlus size={18} />
            Invite User
          </button>
        </div>
      </div>
    </div>
  );
}