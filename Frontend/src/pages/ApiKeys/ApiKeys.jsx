import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import HeroHeader from "./components/HeroHeader";
import ApiKeysTable from "./components/ApiKeysTable";
import OAuthClients from "./components/OAuthClients";
import ClientDetails from "./components/ClientDetails";
import UsageAnalytics from "./components/UsageAnalytics";

export default function ApiKeys() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <HeroHeader />

            <ApiKeysTable />

            <OAuthClients />

            <ClientDetails />

            <UsageAnalytics />
          </div>
        </main>
      </div>
    </div>
  );
}