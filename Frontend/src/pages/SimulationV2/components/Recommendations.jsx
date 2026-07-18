import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Activity,
} from "lucide-react";

export default function Recommendations({
  level,
  decision,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
    >
      <h2 className="text-xl font-bold text-slate-800">
        Recommended Actions
      </h2>

      <p className="text-sm text-slate-500 mt-1 mb-6">
        Suggested response based on calculated risk
      </p>

      <div className="space-y-4">

        <div className="flex gap-4">
          <CheckCircle2 className="text-green-600" />
          <div>
            <p className="font-semibold">{decision}</p>
            <p className="text-sm text-slate-500">
              Authentication completed successfully.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Shield className="text-blue-600" />
          <div>
            <p className="font-semibold">
              Risk Level : {level}
            </p>
            <p className="text-sm text-slate-500">
              Continue monitoring user activity.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Activity className="text-orange-500" />
          <div>
            <p className="font-semibold">
              Confidence Score
            </p>
            <p className="text-sm text-slate-500">
              98.4% Authentication Confidence
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}