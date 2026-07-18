import { useState } from "react";
import { auditLogs } from "./data";

import HeroHeader from "./components/HeroHeader";
import FilterBar from "./components/FilterBar";
import AuditTable from "./components/AuditTable";
import EventDetails from "./components/EventDetails";

export default function AuditLogs() {
  const [selectedLog, setSelectedLog] = useState(auditLogs[0]);
  const [search, setSearch] = useState("");

  const filteredLogs = auditLogs.filter((log) => {
    const query = search.toLowerCase();

    return (
      log.application.toLowerCase().includes(query) ||
      log.user.toLowerCase().includes(query) ||
      log.decision.toLowerCase().includes(query) ||
      log.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6 p-6">
      <HeroHeader />

      <FilterBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AuditTable
            logs={filteredLogs}
            onSelect={setSelectedLog}
          />
        </div>

        <EventDetails log={selectedLog} />
      </div>
    </div>
  );
}