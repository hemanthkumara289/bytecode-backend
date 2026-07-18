import { motion } from "framer-motion";
import {
  ShieldCheck,
  AlertTriangle,
  Users,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Protected Applications",
    value: "24",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Today's Logins",
    value: "12,847",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "High Risk Events",
    value: "37",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Audit Logs",
    value: "2.1M",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function DashboardPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold text-blue-600">
            PLATFORM DASHBOARD
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Enterprise Security Dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Monitor authentication activity, analyze risk, and manage
            policies from a centralized dashboard.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Recent Authentication Requests
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span>john@company.com</span>
                <span className="text-green-600 font-medium">
                  Low Risk
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>finance@company.com</span>
                <span className="text-yellow-600 font-medium">
                  MFA Required
                </span>
              </div>

              <div className="flex justify-between">
                <span>admin@company.com</span>
                <span className="text-red-600 font-medium">
                  Blocked
                </span>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}