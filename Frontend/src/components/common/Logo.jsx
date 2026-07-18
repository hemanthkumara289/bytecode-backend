import { ShieldCheck } from "lucide-react";

export default function Logo({ size = "default" }) {
  const iconSize = size === "small" ? 22 : 30;

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
        <ShieldCheck size={iconSize} strokeWidth={2.3} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          SecureAuth
        </h1>

        <p className="text-xs text-slate-500">
          Adaptive Authentication
        </p>
      </div>
    </div>
  );
}