import { useEffect, useState } from "react";
import { ShieldCheck, RefreshCw } from "lucide-react";
import { mfaCode } from "../data";

export default function MFAVerification({ onSuccess }) {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otp === mfaCode) {
      onSuccess();
    } else {
      alert("Invalid OTP.\n\nDemo OTP: 123456");
    }
  };

  const handleResend = () => {
    setTimer(30);
    setOtp("");

    alert("A new verification code has been sent.\n\nDemo OTP: 123456");
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
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
          A verification code has been sent to your registered device.
        </p>
      </div>

      {/* OTP */}
      <div className="mt-10">
        <label className="block mb-3 text-sm font-semibold text-slate-700">
          Verification Code
        </label>

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, ""))
          }
          placeholder="123456"
          className="w-full rounded-2xl border border-slate-300 py-4 text-center text-3xl tracking-[0.6em] font-bold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Timer */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-slate-500">
          Code expires in
          <span className="ml-2 font-bold text-blue-600">
            {timer}s
          </span>
        </span>

        <button
          onClick={handleResend}
          disabled={timer > 0}
          className={`flex items-center gap-2 text-sm font-medium ${
            timer > 0
              ? "text-slate-400 cursor-not-allowed"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          <RefreshCw size={16} />
          Resend Code
        </button>
      </div>

      {/* Verify */}
      <button
        onClick={handleVerify}
        className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Verify & Continue
      </button>

      {/* Demo Info */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-semibold text-blue-700">
          Demo Information
        </h3>

        <p className="mt-2 text-sm text-blue-600">
          Use the following OTP for the hackathon demo:
        </p>

        <p className="mt-3 text-center text-3xl font-bold tracking-[0.4em] text-blue-700">
          {mfaCode}
        </p>
      </div>
    </div>
  );
}