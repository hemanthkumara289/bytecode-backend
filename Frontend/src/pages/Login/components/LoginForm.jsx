import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertTriangle,
  LoaderCircle,
} from "lucide-react";

export default function LoginForm({ onLogin, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const demoUsers = [
    {
      label: "🟢 Low Risk",
      email: "admin@secureauth.com",
      password: "Admin@123",
    },
    {
      label: "🟡 Medium Risk",
      email: "manager@secureauth.com",
      password: "Manager@123",
    },
    {
      label: "🔴 High Risk",
      email: "hacker@evil.com",
      password: "Hack@123",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationError("");

    if (!email.trim()) {
      setValidationError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setValidationError("Password is required.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setLoading(false);

    onLogin(email.trim(), password);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back
        </h2>

        <p className="mt-2 text-slate-500">
          Sign in to continue to SecureAuth.
        </p>
      </div>

      {(error || validationError) && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
          <AlertTriangle
            className="mt-0.5 text-red-600"
            size={20}
          />

          <div>
            <p className="font-semibold text-red-700">
              Authentication Failed
            </p>

            <p className="text-sm text-red-600">
              {validationError || error}
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
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
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={
                showPassword ? "text" : "password"
              }
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
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
              onChange={(e) =>
                setRemember(e.target.checked)
              }
            />

            Remember me
          </label>

          <button
            type="button"
            className="text-sm font-medium text-blue-600"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login */}

        <button
          disabled={loading}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? (
            <>
              <LoaderCircle
                className="animate-spin"
                size={18}
              />

              Authenticating...
            </>
          ) : (
            <>
              Sign In

              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      {/* Demo Credentials */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="mb-4 font-semibold text-slate-800">
          Demo Accounts
        </h3>

        <div className="space-y-3">
          {demoUsers.map((user) => (
            <button
              key={user.email}
              onClick={() => {
                setEmail(user.email);
                setPassword(user.password);
              }}
              className="w-full rounded-xl border bg-white p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
            >
              <p className="font-semibold">
                {user.label}
              </p>

              <p className="text-sm text-slate-600">
                {user.email}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {user.password}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p className="text-center text-sm font-medium text-blue-700">
          🛡 Protected by SecureAuth Adaptive Authentication Engine
        </p>
      </div>
    </div>
);
}