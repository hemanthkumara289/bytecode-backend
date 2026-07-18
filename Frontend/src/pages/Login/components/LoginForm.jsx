import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    onLogin(email.trim(), password);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white shadow-2xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back
        </h2>

        <p className="mt-2 text-slate-500">
          Sign in to continue to SecureAuth.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Password
          </label>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 pl-12 pr-12 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />

            Remember me
          </label>

          <button
            type="button"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition duration-300"
        >
          Sign In
          <ArrowRight size={18} />
        </button>
      </form>

      {/* Demo Credentials */}
      <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5">
        <h3 className="font-semibold text-slate-800 mb-4">
          Demo Credentials
        </h3>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-medium text-green-700">
              🟢 Low Risk Login
            </p>

            <p className="text-slate-600">
              admin@secureauth.com
            </p>

            <p className="text-slate-600">
              Password: Admin@123
            </p>
          </div>

          <div>
            <p className="font-medium text-amber-700">
              🟡 Medium Risk Login
            </p>

            <p className="text-slate-600">
              manager@secureauth.com
            </p>

            <p className="text-slate-600">
              Password: Manager@123
            </p>
          </div>

          <div>
            <p className="font-medium text-red-700">
              🔴 High Risk Login
            </p>

            <p className="text-slate-600">
              hacker@evil.com
            </p>

            <p className="text-slate-600">
              Password: Hack@123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}