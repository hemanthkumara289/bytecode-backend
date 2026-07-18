import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import RiskChart from "@/components/dashboard/RiskChart";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import ModuleExplorer from "@/components/dashboard/ModuleExplorer";
import SystemHealth from "@/components/dashboard/SystemHealth";

import {
  AppWindow,
  Users,
  ShieldCheck,
  FlaskConical,
  ScrollText,
  BarChart3,
  KeyRound,
  UserCog,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 space-y-8 p-8">
          {/* ================= Hero ================= */}

          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 p-8 text-white lg:flex-row lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-100">
                Identity & Access Management
              </p>

              <h1 className="mt-2 text-4xl font-bold">
                SecureAuth Security Operations Center
              </h1>

              <p className="mt-4 max-w-3xl text-blue-100">
                Monitor applications, users, adaptive authentication,
                security analytics, API integrations and platform health
                from one unified dashboard.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-blue-100">Security Score</p>

                <h2 className="mt-2 text-3xl font-bold">96%</h2>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-blue-100">System Status</p>

                <h2 className="mt-2 text-3xl font-bold text-green-300">
                  Healthy
                </h2>
              </div>
            </div>
          </div>

          {/* ================= KPI Cards ================= */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Applications"
              value="24"
              subtitle="Registered Applications"
              icon={AppWindow}
              iconBg="bg-blue-100"
              iconColor="text-blue-600"
            />

            <StatCard
              title="Users"
              value="12,847"
              subtitle="Registered Users"
              icon={Users}
              iconBg="bg-green-100"
              iconColor="text-green-600"
            />

            <StatCard
              title="Policies"
              value="18"
              subtitle="Adaptive Policies"
              icon={ShieldCheck}
              iconBg="bg-purple-100"
              iconColor="text-purple-600"
            />

            <StatCard
              title="Simulations"
              value="126"
              subtitle="Security Simulations"
              icon={FlaskConical}
              iconBg="bg-orange-100"
              iconColor="text-orange-600"
            />

            <StatCard
              title="Audit Logs"
              value="4,281"
              subtitle="Security Events"
              icon={ScrollText}
              iconBg="bg-red-100"
              iconColor="text-red-600"
            />

            <StatCard
              title="Analytics"
              value="99.98%"
              subtitle="Authentication Success"
              icon={BarChart3}
              iconBg="bg-cyan-100"
              iconColor="text-cyan-600"
            />

            <StatCard
              title="API Keys"
              value="43"
              subtitle="Active Credentials"
              icon={KeyRound}
              iconBg="bg-yellow-100"
              iconColor="text-yellow-700"
            />

            <StatCard
              title="Roles"
              value="5"
              subtitle="Configured Roles"
              icon={UserCog}
              iconBg="bg-indigo-100"
              iconColor="text-indigo-600"
            />
          </div>

          {/* ================= Analytics & Alerts ================= */}

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RiskChart />
            </div>

            <AlertsPanel />
          </div>

          {/* ================= Platform Modules ================= */}

          <ModuleExplorer />

          {/* ================= Activity & Quick Actions ================= */}

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>

            <QuickActions />
          </div>

          {/* ================= Platform Health ================= */}

          <SystemHealth />
        </main>
      </div>
    </div>
  );
}