import { useState } from "react";
import { applications } from "./data";

import HeroHeader from "./components/HeroHeader";
import ApplicationsTable from "./components/ApplicationsTable";
import ApplicationDetails from "./components/ApplicationDetails";
import RegisterAppModal from "./components/RegisterAppModal";

export default function Applications() {
  const [selectedApp, setSelectedApp] = useState(applications[0]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-6 p-6">
      <HeroHeader onAdd={() => setOpenModal(true)} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <ApplicationsTable
            applications={applications}
            onSelect={setSelectedApp}
          />
        </div>

        <ApplicationDetails app={selectedApp} />
      </div>

      <RegisterAppModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}