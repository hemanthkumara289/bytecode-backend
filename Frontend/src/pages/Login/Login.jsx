import { useState } from "react";
import { Navigate } from "react-router-dom";

import { demoUsers } from "./data";

import LoginCard from "./components/LoginCard";
import LoginForm from "./components/LoginForm";
import RiskEvaluation from "./components/RiskEvaluation";
import MFAVerification from "./components/MFAVerification";
import LoginSuccess from "./components/LoginSuccess";
import LoginBlocked from "./components/LoginBlocked";
import SecurityTips from "./components/SecurityTips";

export default function Login() {
  const [step, setStep] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const [redirect, setRedirect] = useState(false);

  // NEW
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [loginError, setLoginError] = useState("");

  const handleLogin = (email, password) => {
    const user = demoUsers[email];

    // Invalid credentials
    if (!user || user.password !== password) {
      const attempts = failedAttempts + 1;
      setFailedAttempts(attempts);

      let risk = "LOW";
      let score = 25;

      if (attempts === 2) {
        risk = "MEDIUM";
        score = 60;
      }

      if (attempts >= 3) {
        risk = "HIGH";
        score = 95;
      }

      setCurrentUser({
        device: "Unknown Device",
        location: "Unknown Location",
        risk,
        score,
        message: "Repeated invalid credentials detected.",
        failedLogin: true,
        attempts,
      });

      setLoginError("Invalid email or password.");

      // Show popup for demo
      window.alert(
        `Invalid email or password.\n\nAdaptive Risk Score Increased to ${score}/100`
      );

      setStep("risk");

      return;
    }

    // Success
    setLoginError("");
    setFailedAttempts(0);

    setCurrentUser({
      ...user,
      failedLogin: false,
    });

    setStep("risk");
  };

  const handleRiskComplete = () => {
    // Failed Login Flow
    if (currentUser.failedLogin) {
      if (currentUser.risk === "LOW") {
        setStep("login");
      } else if (currentUser.risk === "MEDIUM") {
        setStep("mfa");
      } else {
        setStep("blocked");
      }

      return;
    }

    // Normal Flow
    if (currentUser.risk === "LOW") {
      setStep("success");
    } else if (currentUser.risk === "MEDIUM") {
      setStep("mfa");
    } else {
      setStep("blocked");
    }
  };

  const handleMFASuccess = () => {
    setStep("success");
  };

  const handleDashboardRedirect = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl w-full items-center">
        <LoginCard />

        <div className="space-y-6">
          {step === "login" && (
            <>
              <LoginForm
                onLogin={handleLogin}
                error={loginError}
              />

              <SecurityTips />
            </>
          )}

          {step === "risk" && (
            <RiskEvaluation
              user={currentUser}
              onComplete={handleRiskComplete}
            />
          )}

          {step === "mfa" && (
            <MFAVerification
              onSuccess={handleMFASuccess}
            />
          )}

          {step === "success" && (
            <LoginSuccess
              user={currentUser}
              onContinue={handleDashboardRedirect}
            />
          )}

          {step === "blocked" && (
            <LoginBlocked user={currentUser} />
          )}
        </div>
      </div>
    </div>
  );
}