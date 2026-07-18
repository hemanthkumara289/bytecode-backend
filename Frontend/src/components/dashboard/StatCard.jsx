import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg"
    >
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-slate-100 opacity-40 blur-2xl" />

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>

          {/* Trend Indicator */}
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
              <TrendingUp className="h-3.5 w-3.5 text-green-600" />
              <span className="text-xs font-semibold text-green-600">
                +8.2%
              </span>
            </div>

            <span className="text-xs text-slate-400">
              vs last week
            </span>
          </div>
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
      </div>
    </motion.div>
  );
}