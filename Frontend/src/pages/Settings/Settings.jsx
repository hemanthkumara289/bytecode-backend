import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import HeroHeader from "./components/HeroHeader";
import ProfileSettings from "./components/ProfileSettings";
import OrganizationSettings from "./components/OrganizationSettings";
import SecuritySettings from "./components/SecuritySettings";
import NotificationSettings from "./components/NotificationSettings";
import SessionSettings from "./components/SessionSettings";
import DangerZone from "./components/DangerZone";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 space-y-6 overflow-y-auto p-6">
          <HeroHeader />

          <ProfileSettings />

          <OrganizationSettings />

          <SecuritySettings />

          <NotificationSettings />

          <SessionSettings />

          <DangerZone />
        </main>
      </div>
    </div>
  );
}