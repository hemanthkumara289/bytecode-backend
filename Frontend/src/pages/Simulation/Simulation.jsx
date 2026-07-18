import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

import SimulationForm from "./components/SimulationForm";
import RiskMeter from "./components/RiskMeter";
import AuthFlow from "./components/AuthFlow";
import ReasoningCard from "./components/ReasoningCard";
import Timeline from "./components/Timeline";
import RecommendationCard from "./components/RecommendationCard";

export default function Simulation() {
  const [form, setForm] = useState({
    amount: "",
    device: "Known Device",
    location: "India",
    loginTime: "Day",
  });

  const [result, setResult] = useState(null);

  const runSimulation = () => {
    let score = 15;

    if (Number(form.amount) > 50000) score += 30;

    if (form.device === "Unknown Device") score += 25;

    if (form.location === "Outside India") score += 20;

    if (form.loginTime === "Late Night") score += 15;

    let level = "Low";
    let flow = ["Password"];

    if (score >= 40 && score < 70) {
      level = "Medium";
      flow = ["Password", "OTP"];
    }

    if (score >= 70) {
      level = "High";
      flow = [
        "Password",
        "OTP",
        "Manager Approval",
      ];
    }

    const decision =
      score >= 90
        ? "Access Blocked"
        : "Access Granted";

    setResult({
      score,
      level,
      flow,
      decision,
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="space-y-6 p-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Authentication Simulation
            </h1>

            <p className="mt-1 text-slate-500">
              Simulate adaptive authentication decisions based on
              transaction context.
            </p>
          </div>

          {/* Top Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            <SimulationForm
              form={form}
              setForm={setForm}
              runSimulation={runSimulation}
            />

            {result ? (
              <RiskMeter
                score={result.score}
                level={result.level}
              />
            ) : (
              <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-slate-400 shadow-sm">
                Run a simulation to generate a risk score.
              </div>
            )}
          </div>

          {result && (
            <>
              {/* Authentication Flow */}
              <div className="grid gap-6 lg:grid-cols-2">
                <AuthFlow
                  flow={result.flow}
                  decision={result.decision}
                />

                <ReasoningCard
                  form={form}
                  level={result.level}
                />
              </div>

              {/* Recommendation */}
              <RecommendationCard
                level={result.level}
              />

              {/* Timeline */}
              <Timeline
                flow={result.flow}
                decision={result.decision}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}