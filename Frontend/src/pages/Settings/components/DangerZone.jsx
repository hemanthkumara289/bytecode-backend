import {
  AlertTriangle,
  LogOut,
  KeyRound,
  Trash2,
} from "lucide-react";

import { dangerActions } from "../data";

const iconMap = {
  "Logout All Users": LogOut,
  "Revoke API Keys": KeyRound,
  "Delete Organization": Trash2,
};

export default function DangerZone() {
  return (
    <div className="rounded-3xl border-2 border-red-300 bg-red-50 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
          <AlertTriangle
            size={28}
            className="text-red-600"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-700">
            Danger Zone
          </h2>

          <p className="mt-1 text-sm text-red-600">
            These actions are irreversible. Proceed only if you fully understand
            the consequences.
          </p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="mt-6 rounded-2xl border border-red-300 bg-white p-5">
        <h3 className="font-semibold text-red-700">
          Warning
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-700">
          Actions performed in this section may immediately terminate active
          sessions, invalidate API credentials, or permanently remove your
          organization and its associated authentication data. Ensure you have
          backups before proceeding.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 space-y-5">
        {dangerActions.map((action) => {
          const Icon = iconMap[action.title];

          return (
            <div
              key={action.id}
              className="flex flex-col gap-4 rounded-2xl border border-red-200 bg-white p-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <Icon
                    size={22}
                    className="text-red-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {action.description}
                  </p>
                </div>
              </div>

              <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
                {action.title}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-2xl bg-red-100 p-4">
        <p className="text-sm font-medium text-red-700">
          SecureAuth Recommendation:
        </p>

        <p className="mt-2 text-sm text-red-600">
          Restrict access to the Danger Zone to Super Administrators only and
          require Multi-Factor Authentication before executing any destructive
          action.
        </p>
      </div>
    </div>
  );
}