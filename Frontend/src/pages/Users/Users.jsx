import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import { users } from "./data";

import HeroHeader from "./components/HeroHeader";
import UsersTable from "./components/UsersTable";
import UserDetails from "./components/UserDetails";
import InviteUserModal from "./components/InviteUserModal";

export default function Users() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.application.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8 space-y-6">
          <HeroHeader
            search={search}
            setSearch={setSearch}
            onInvite={() => setShowModal(true)}
          />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <UsersTable
                users={filteredUsers}
                onSelect={setSelectedUser}
              />
            </div>

            <UserDetails user={selectedUser} />
          </div>
        </main>
      </div>

      {showModal && (
        <InviteUserModal
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}