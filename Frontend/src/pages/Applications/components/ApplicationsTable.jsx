import { Globe, Smartphone, Building2 } from "lucide-react";

const getIcon = (type) => {
  switch (type) {
    case "Web":
      return <Globe className="w-4 h-4 text-blue-600" />;
    case "Mobile":
      return <Smartphone className="w-4 h-4 text-green-600" />;
    default:
      return <Building2 className="w-4 h-4 text-purple-600" />;
  }
};

export default function ApplicationsTable({
  applications,
  onSelect,
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">
          Registered Applications
        </h2>
      </div>

      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-slate-600 text-sm">
            <th className="px-6 py-3">Application</th>
            <th>Type</th>
            <th>Policy</th>
            <th>Users</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr
              key={app.id}
              onClick={() => onSelect(app)}
              className="border-t hover:bg-blue-50 cursor-pointer transition"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {getIcon(app.type)}

                  <div>
                    <div className="font-semibold text-slate-800">
                      {app.name}
                    </div>

                    <div className="text-xs text-slate-500">
                      {app.clientId}
                    </div>
                  </div>
                </div>
              </td>

              <td>{app.type}</td>

              <td>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                  {app.policy}
                </span>
              </td>

              <td>{app.users.toLocaleString()}</td>

              <td>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                  ● {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}