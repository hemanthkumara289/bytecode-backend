import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import HeroHeader from "./components/HeroHeader";
import KPISection from "./components/KPISection";
import LoginTrendChart from "./components/LoginTrendChart";
import RiskDistribution from "./components/RiskDistribution";
import DeviceAnalytics from "./components/DeviceAnalytics";
import GeoLoginTable from "./components/GeoLoginTable";
import SecurityAlerts from "./components/SecurityAlerts";
import AIInsights from "./components/AIInsights";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <HeroHeader />

          <KPISection />

          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <LoginTrendChart />
            <RiskDistribution />
          </div>

          {/* Analytics */}
          <div className="grid gap-6 lg:grid-cols-2">
            <DeviceAnalytics />
            <GeoLoginTable />
          </div>

          {/* Bottom Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            <SecurityAlerts />
            <AIInsights />
          </div>
        </main>
      </div>
    </div>
  );
}