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

  const handleLogin = (email, password) => {
    const user = demoUsers[email];

    if (!user || user.password !== password) {
      alert("Invalid email or password.");
      return;
    }

    setCurrentUser(user);
    setStep("risk");
  };

  const handleRiskComplete = () => {
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
        {/* Left Side */}
        <LoginCard />

        {/* Right Side */}
        <div className="space-y-6">
          {step === "login" && (
            <>
              <LoginForm onLogin={handleLogin} />
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
            <LoginBlocked
              user={currentUser}
            />
          )}
        </div>
      </div>
    </div>
  );
}