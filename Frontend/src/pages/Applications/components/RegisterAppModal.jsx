import { useState } from "react";
import { X } from "lucide-react";

export default function RegisterAppModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    type: "Web",
    policy: "High Security",
    redirect: "",
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Register Application
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <input
            placeholder="Application Name"
            className="w-full border rounded-lg p-3"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <select
            className="w-full border rounded-lg p-3"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option>Web</option>
            <option>Mobile</option>
            <option>Internal</option>
            <option>SaaS</option>
          </select>

          <select
            className="w-full border rounded-lg p-3"
            value={form.policy}
            onChange={(e) =>
              setForm({ ...form, policy: e.target.value })
            }
          >
            <option>High Security</option>
            <option>MFA Required</option>
            <option>Medium Security</option>
            <option>Zero Trust</option>
          </select>

          <input
            placeholder="Redirect URI"
            className="w-full border rounded-lg p-3"
            value={form.redirect}
            onChange={(e) =>
              setForm({ ...form, redirect: e.target.value })
            }
          />

          <button
            onClick={() => {
              alert(
                "Application Registered!\n\nClient ID: sa_live_" +
                  Math.random().toString(36).substring(2, 10)
              );
              onClose();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Register Application
          </button>
        </div>
      </div>
    </div>
  );
}