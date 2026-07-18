import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  RefreshCw,
  LoaderCircle,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { mfaCode } from "../data";

export default function MFAVerification({ onSuccess }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(30);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const inputRefs = useRef([]);

  // Countdown Timer
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Format timer as MM:SS
  const formattedTime = `00:${String(timer).padStart(2, "0")}`;

  // Handle OTP typing
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Paste support
  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const updated = [...otp];

    pasted.split("").forEach((digit, i) => {
      updated[i] = digit;
    });

    setOtp(updated);

    const next =
      pasted.length >= 6 ? 5 : pasted.length;

    inputRefs.current[next]?.focus();
  };

  // Verify OTP
  const handleVerify = async () => {
    const enteredOTP = otp.join("");

    if (enteredOTP.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setLoading(true);
    setError("");

    // Fake API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1800)
    );

    if (enteredOTP === mfaCode) {
      onSuccess();
      return;
    }

    setLoading(false);

    setError(
      `Invalid verification code. Demo OTP: ${mfaCode}`
    );
  };

  // Resend OTP
  const handleResend = () => {
    setOtp(Array(6).fill(""));
    setTimer(30);
    setError("");

    inputRefs.current[0]?.focus();
  };

  // Copy Demo OTP
  const handleCopy = async () => {
    await navigator.clipboard.writeText(mfaCode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
    return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <ShieldCheck
            className="text-blue-600"
            size={38}
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          Multi-Factor Authentication
        </h2>

        <p className="mt-3 text-slate-500">
          Adaptive Authentication has requested an additional verification.
        </p>
      </div>

      {/* OTP Boxes */}
      <div className="mt-10">
        <label className="mb-4 block text-sm font-semibold text-slate-700">
          Verification Code
        </label>

        <div
          className="flex justify-center gap-3"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              disabled={loading}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }
              className="h-14 w-14 rounded-xl border border-slate-300 text-center text-2xl font-bold outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
            />
          ))}
        </div>

        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>
          </div>
        )}
      </div>

      {/* Timer */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            OTP expires in
          </p>

          <p className="font-bold text-blue-600">
            {formattedTime}
          </p>
        </div>

        <button
          onClick={handleResend}
          disabled={timer > 0}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
            timer > 0
              ? "cursor-not-allowed text-slate-400"
              : "text-blue-600 hover:bg-blue-50"
          }`}
        >
          <RefreshCw size={16} />
          Resend Code
        </button>
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={loading}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {loading ? (
          <>
            <LoaderCircle
              className="animate-spin"
              size={20}
            />
            Verifying...
          </>
        ) : (
          <>
            <ShieldCheck size={20} />
            Verify & Continue
          </>
        )}
      </button>

      {/* Security Status */}
      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2
            size={20}
            className="text-green-600"
          />

          <h3 className="font-semibold text-green-700">
            Adaptive Authentication Status
          </h3>
        </div>

        <div className="space-y-2 text-sm text-green-700">
          <div className="flex justify-between">
            <span>Device Trust</span>
            <span>Verified ✓</span>
          </div>

          <div className="flex justify-between">
            <span>Location Analysis</span>
            <span>Verified ✓</span>
          </div>

          <div className="flex justify-between">
            <span>Risk Level</span>
            <span className="font-semibold text-amber-600">
              Medium
            </span>
          </div>

          <div className="flex justify-between">
            <span>Policy Decision</span>
            <span className="font-semibold">
              MFA Required
            </span>
          </div>
        </div>
      </div>

      {/* Demo OTP */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-blue-700">
              Demo OTP
            </h3>

            <p className="mt-1 text-sm text-blue-600">
              Use this code during the hackathon.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="rounded-lg bg-white p-2 shadow transition hover:bg-slate-100"
          >
            <Copy
              size={18}
              className="text-blue-600"
            />
          </button>
        </div>

        <div className="mt-5 rounded-xl bg-white py-4 text-center shadow-sm">
          <p className="text-3xl font-bold tracking-[0.45em] text-blue-700">
            {mfaCode}
          </p>
        </div>

        {copied && (
          <p className="mt-3 text-center text-sm font-medium text-green-600">
            ✓ OTP copied to clipboard
          </p>
        )}
      </div>
    </div>
  );
}