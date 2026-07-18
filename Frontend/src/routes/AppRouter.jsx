import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/Landing/Landing";
import Login from "@/pages/Login/Login";
import ApiKeys from "@/pages/ApiKeys/ApiKeys";
import Analytics from "@/pages/Analytics/Analytics";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
import Applications from "@/pages/Applications/Applications";
import Users from "@/pages/Users/Users";
import PolicyBuilder from "@/pages/PolicyBuilder/PolicyBuilder";
import SimulationV2 from "@/pages/SimulationV2/SimulationV2";
import AuditLogs from "@/pages/AuditLogs/AuditLogs";
import RolesPermissions from "@/pages/RolesPermissions/RolesPermissions";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/api-keys" element={<ApiKeys />} />

        <Route path="/roles-permissions" element={<RolesPermissions />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/users" element={<Users />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/policies" element={<PolicyBuilder />} />

        <Route path="/simulation" element={<SimulationV2 />} />

        <Route path="/audit-logs" element={<AuditLogs />} />
      </Routes>
    </BrowserRouter>
  );
}