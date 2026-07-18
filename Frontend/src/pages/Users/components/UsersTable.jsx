const getStatusBadge = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";

    case "Locked":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-200 text-slate-700";
  }
};

export default function UsersTable({ users, onSelect }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-800">
          User Directory
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Select a user to view detailed account information.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-600">
              <th className="px-6 py-3">User</th>
              <th className="px-4 py-3">Application</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">MFA</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Login</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => onSelect(user)}
                className="border-t border-slate-100 hover:bg-blue-50 cursor-pointer transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium text-slate-800">
                        {user.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-slate-700">
                  {user.application}
                </td>

                <td className="px-4 py-4 text-slate-700">
                  {user.role}
                </td>

                <td className="px-4 py-4">
                  {user.mfa ? (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      Enabled
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                      Disabled
                    </span>
                  )}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {user.lastLogin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}