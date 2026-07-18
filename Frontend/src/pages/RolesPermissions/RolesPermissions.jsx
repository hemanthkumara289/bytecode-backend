import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import HeroHeader from "./components/HeroHeader";
import RolesTable from "./components/RolesTable";
import PermissionMatrix from "./components/PermissionMatrix";
import UserAssignments from "./components/UserAssignments";
import RoleDetails from "./components/RoleDetails";

export default function RolesPermissions() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 space-y-8 p-6">
          <HeroHeader />

          <RolesTable />

          <PermissionMatrix />

          <UserAssignments />

          <RoleDetails />
        </main>
      </div>
    </div>
  );
}