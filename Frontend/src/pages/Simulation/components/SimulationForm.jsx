export default function SimulationForm({ form, setForm, runSimulation }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Transaction Details
      </h2>

      <div className="space-y-5">
        {/* Amount */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Transaction Amount
          </label>

          <input
            type="number"
            placeholder="50000"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Device */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Device
          </label>

          <select
            value={form.device}
            onChange={(e) =>
              setForm({ ...form, device: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option>Known Device</option>
            <option>Unknown Device</option>
          </select>
        </div>

        {/* Location */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Location
          </label>

          <select
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option>India</option>
            <option>Outside India</option>
          </select>
        </div>

        {/* Login Time */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Login Time
          </label>

          <select
            value={form.loginTime}
            onChange={(e) =>
              setForm({ ...form, loginTime: e.target.value })
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option>Business Hours</option>
            <option>Late Night</option>
          </select>
        </div>

        {/* Button */}

        <button
          onClick={runSimulation}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Run AI Simulation
        </button>
      </div>
    </div>
  );
}