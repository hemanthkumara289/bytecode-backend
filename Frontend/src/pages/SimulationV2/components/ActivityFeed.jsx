import { motion } from "framer-motion";
import {
  ShieldCheck,
  Laptop,
  MapPin,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

export default function ActivityFeed({ decision }) {
  const activities = [
    {
      icon: ShieldCheck,
      title: "Authentication Request Received",
      time: "09:41:02",
    },
    {
      icon: Laptop,
      title: "Trusted Device Verified",
      time: "09:41:03",
    },
    {
      icon: MapPin,
      title: "Location Successfully Validated",
      time: "09:41:04",
    },
    {
      icon: FileCheck,
      title: "Adaptive Policy Executed",
      time: "09:41:05",
    },
    {
      icon: CheckCircle2,
      title: decision,
      time: "09:41:06",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
    >
      <h2 className="text-xl font-bold text-slate-800">
        Live Activity Feed
      </h2>

      <p className="text-sm text-slate-500 mt-1 mb-6">
        Real-time authentication events
      </p>

      <div className="space-y-5">
        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="rounded-xl bg-blue-100 p-3">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-slate-800">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}