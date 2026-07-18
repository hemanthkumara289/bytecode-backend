import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import HeroHeader from "./components/HeroHeader";
import StatsCards from "./components/StatsCards";
import LiveAIEngine from "./components/LiveAIEngine";
import CircularRiskGauge from "./components/CircularRiskGauge";
import ActivityFeed from "./components/ActivityFeed";
import Recommendations from "./components/Recommendations";
import AuthenticationPipeline from "./components/AuthenticationPipeline";
import AuthenticationReasoning from "./components/AuthenticationReasoning";
import RiskTrendChart from "./components/RiskTrendChart";

export default function SimulationV2() {
  const [running, setRunning] = useState(false);

  const [result, setResult] = useState({
    score: 32,
    level: "Low",
    decision: "Access Granted",
  });

  const runSimulation = () => {
    setRunning(true);

    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);

      let level = "Low";
      let decision = "Access Granted";

      if (score >= 70) {
        level = "High";
        decision = "Access Denied";
      } else if (score >= 40) {
        level = "Medium";
        decision = "Require MFA";
      }

      setResult({
        score,
        level,
        decision,
      });

      setRunning(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8 space-y-8">
          <HeroHeader />

          <StatsCards
            score={result.score}
            level={result.level}
            decision={result.decision}
          />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <LiveAIEngine running={running} />
            <CircularRiskGauge score={result.score} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ActivityFeed decision={result.decision} />

            <Recommendations
              level={result.level}
              decision={result.decision}
            />
          </div>

          <AuthenticationPipeline
            score={result.score}
            level={result.level}
          />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <AuthenticationReasoning
              score={result.score}
              level={result.level}
              decision={result.decision}
            />

            <RiskTrendChart score={result.score} />
          </div>

          <div className="flex justify-center">
            <button
              onClick={runSimulation}
              disabled={running}
              className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {running ? "Running Simulation..." : "Run Simulation"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}