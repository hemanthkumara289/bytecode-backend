const getRiskBadge = (risk) => {
  if (risk <= 30)
    return "bg-green-100 text-green-700";

  if (risk <= 70)
    return "bg-yellow-100 text-yellow-700";

  return "bg-red-100 text-red-700";
};

const getDecisionBadge = (decision) => {
  switch (decision) {
    case "Access Granted":
      return "bg-green-100 text-green-700";

    case "MFA Required":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-red-100 text-red-700";
  }
};

export default function AuditTable({ logs, onSelect }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-800">
          Authentication Events
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Click any event to inspect complete authentication details.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 text-slate-600 text-sm">
            <tr>
              <th className="text-left px-6 py-3">Time</th>
              <th className="text-left px-4 py-3">Application</th>
              <th className="text-left px-4 py-3">User</th>
              <th className="text-left px-4 py-3">Risk</th>
              <th className="text-left px-4 py-3">Decision</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                onClick={() => onSelect(log)}
                className="border-t border-slate-100 hover:bg-blue-50 cursor-pointer transition"
              >
                <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                  {log.timestamp}
                </td>

                <td className="px-4 py-4 font-medium text-slate-800">
                  {log.application}
                </td>

                <td className="px-4 py-4 text-slate-600">
                  {log.user}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskBadge(
                      log.risk
                    )}`}
                  >
                    {log.risk}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getDecisionBadge(
                      log.decision
                    )}`}
                  >
                    {log.decision}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {logs.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No authentication events found.
          </div>
        )}
      </div>
    </div>
  );
}