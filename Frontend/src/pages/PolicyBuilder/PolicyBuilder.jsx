import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import {
  ShieldCheck,
  Plus,
  ArrowDown,
  Save,
} from "lucide-react";

export default function PolicyBuilder() {
  const [policy, setPolicy] = useState({
    amount: "50000",
    device: "Unknown Device",
    location: "Outside India",
    loginTime: "After 10 PM",
    risk: "High",
  });

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">

          {/* Header */}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Adaptive Authentication Policy Builder
            </h1>

            <p className="mt-2 text-slate-500">
              Create dynamic authentication policies based on user risk.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* LEFT */}

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl font-semibold">
                  Policy Conditions
                </h2>

                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  <Plus size={18}/>
                  Add Condition
                </button>

              </div>

              {/* Amount */}

              <div className="mb-5">

                <label className="text-sm text-slate-500">
                  Transaction Amount
                </label>

                <input
                  value={policy.amount}
                  onChange={(e)=>
                    setPolicy({...policy,amount:e.target.value})
                  }
                  className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-blue-500"
                />

              </div>

              {/* Device */}

              <div className="mb-5">

                <label className="text-sm text-slate-500">
                  Device
                </label>

                <select
                  className="mt-2 w-full rounded-xl border p-3"
                  value={policy.device}
                  onChange={(e)=>
                    setPolicy({...policy,device:e.target.value})
                  }
                >

                  <option>Known Device</option>
                  <option>Unknown Device</option>

                </select>

              </div>

              {/* Location */}

              <div className="mb-5">

                <label className="text-sm text-slate-500">
                  Location
                </label>

                <select
                  className="mt-2 w-full rounded-xl border p-3"
                  value={policy.location}
                  onChange={(e)=>
                    setPolicy({...policy,location:e.target.value})
                  }
                >

                  <option>India</option>
                  <option>Outside India</option>

                </select>

              </div>

              {/* Login Time */}

              <div>

                <label className="text-sm text-slate-500">
                  Login Time
                </label>

                <select
                  className="mt-2 w-full rounded-xl border p-3"
                  value={policy.loginTime}
                  onChange={(e)=>
                    setPolicy({...policy,loginTime:e.target.value})
                  }
                >

                  <option>Business Hours</option>
                  <option>After 10 PM</option>

                </select>

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <ShieldCheck
                  className="text-blue-600"
                  size={28}
                />

                <h2 className="text-xl font-semibold">
                  Authentication Flow
                </h2>

              </div>

              <div className="space-y-5">

                <FlowCard text="Password Verification"/>

                <Arrow/>

                <FlowCard text="OTP Verification"/>

                <Arrow/>

                <FlowCard text="Manager Approval"/>

                <Arrow/>

                <FlowCard text="Grant Access"/>

              </div>

            </div>

          </div>
                    {/* Bottom Section */}

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            {/* Risk Level */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="mb-6 text-xl font-semibold">
                Risk Level
              </h2>

              <div className="grid grid-cols-3 gap-4">

                {["Low","Medium","High"].map((level)=>(
                  <button
                    key={level}
                    onClick={()=>setPolicy({...policy,risk:level})}
                    className={`rounded-2xl border p-4 text-center font-medium transition ${
                      policy.risk===level
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "hover:border-blue-500"
                    }`}
                  >
                    {level}
                  </button>
                ))}

              </div>

            </div>

            {/* Policy Preview */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="mb-6 text-xl font-semibold">
                Policy Preview
              </h2>

              <div className="space-y-4 text-slate-700">

                <p>
                  IF Transaction Amount is greater than
                  <span className="font-semibold text-blue-600">
                    {" "}₹{policy.amount}
                  </span>
                </p>

                <p>
                  AND Device is
                  <span className="font-semibold text-blue-600">
                    {" "}{policy.device}
                  </span>
                </p>

                <p>
                  AND Location is
                  <span className="font-semibold text-blue-600">
                    {" "}{policy.location}
                  </span>
                </p>

                <p>
                  AND Login Time is
                  <span className="font-semibold text-blue-600">
                    {" "}{policy.loginTime}
                  </span>
                </p>

                <hr className="my-4"/>

                <p className="font-semibold">
                  THEN Require:
                </p>

                <ul className="list-disc ml-5 space-y-2">

                  <li>Password Verification</li>

                  <li>OTP Verification</li>

                  <li>Manager Approval</li>

                  <li>Grant Access</li>

                </ul>

                <div className="mt-5 rounded-xl bg-red-50 p-4">

                  <span className="font-semibold">
                    Risk Level :
                  </span>{" "}

                  <span className="text-red-600 font-bold">
                    {policy.risk}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Save Button */}

          <div className="mt-8 flex justify-end">

            <button
              className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              <Save size={20}/>

              Save Policy

            </button>

          </div>

        </main>

      </div>

    </div>

  );
}

/* -------------------------
      Helper Components
--------------------------*/

function FlowCard({text}){

  return(

    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

      <h3 className="font-medium text-slate-800">
        {text}
      </h3>

    </div>

  );

}

function Arrow(){

  return(

    <div className="flex justify-center">

      <ArrowDown
        className="text-blue-600"
        size={24}
      />

    </div>

  );

}