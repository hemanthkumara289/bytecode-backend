import { Globe } from "lucide-react";
import { geoLoginData } from "../data";

export default function GeoLoginTable() {
  const getRiskBadge = (risk) => {
    if (risk <= 30) {
      return "bg-green-100 text-green-700";
    }

    if (risk <= 60) {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  };

  const getRiskLabel = (risk) => {
    if (risk <= 30) return "Low";
    if (risk <= 60) return "Medium";
    return "High";
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Geo Login Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Authentication activity by geographical location
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
          <Globe
            size={24}
            className="text-cyan-600"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">
                Country
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">
                City
              </th>

              <th className="px-4 py-3 text-right text-sm font-semibold text-slate-600">
                Logins
              </th>

              <th className="px-4 py-3 text-center text-sm font-semibold text-slate-600">
                Avg Risk
              </th>
            </tr>
          </thead>

          <tbody>
            {geoLoginData.map((location, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 transition hover:bg-slate-50"
              >
                <td className="px-4 py-4 font-medium text-slate-800">
                  {location.country}
                </td>

                <td className="px-4 py-4 text-slate-600">
                  {location.city}
                </td>

                <td className="px-4 py-4 text-right font-semibold text-slate-800">
                  {location.logins.toLocaleString()}
                </td>

                <td className="px-4 py-4 text-center">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getRiskBadge(
                      location.risk
                    )}`}
                  >
                    {getRiskLabel(location.risk)} ({location.risk})
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-500">
          Bengaluru and Hyderabad account for the majority of successful
          authentication events, while Moscow currently has the highest average
          login risk score and should be monitored closely.
        </p>
      </div>
    </div>
  );
}