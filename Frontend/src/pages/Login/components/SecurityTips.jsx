import {

  Shield,

  Lock,

  Smartphone,

  KeyRound,

  MailWarning,

  CheckCircle2,

} from "lucide-react";



import { securityTips } from "../data";



const icons = [

  Shield,

  Smartphone,

  MailWarning,

  KeyRound,

  Lock,

];



export default function SecurityTips() {

  return (

    <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">

          <Shield size={22} />

        </div>



        <div>

          <h3 className="text-lg font-bold text-slate-800">

            Security Tips

          </h3>



          <p className="text-sm text-slate-500">

            Keep your account protected.

          </p>

        </div>

      </div>



      {/* Tips */}

      <div className="mt-6 space-y-4">

        {securityTips.map((tip, index) => {

          const Icon = icons[index % icons.length];



          return (

            <div

              key={tip}

              className="flex items-start gap-4 rounded-xl bg-white p-4 border border-slate-200"

            >

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">

                <Icon size={18} />

              </div>



              <div className="flex-1">

                <p className="font-medium text-slate-700">

                  {tip}

                </p>

              </div>



              <CheckCircle2

                size={18}

                className="text-green-600"

              />

            </div>

          );

        })}

      </div>



      {/* Footer */}

      <div className="mt-6 rounded-xl border border-blue-200 bg-blue-100 p-4">

        <p className="text-sm leading-6 text-blue-700">

          SecureAuth continuously evaluates every login using device reputation,

          location, behavioral analysis, and adaptive policies to provide

          intelligent authentication decisions.

        </p>

      </div>

    </div>

  );

}