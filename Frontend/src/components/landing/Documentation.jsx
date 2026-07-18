import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  KeyRound,
  Copy,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Database,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Adaptive Authentication",
  "JWT Support",
  "OAuth 2.0",
  "OpenID Connect",
  "Risk Engine",
  "Policy Builder",
  "Audit Logs",
  "Simulation API",
];

const endpoints = [
  "POST /api/v1/authenticate",
  "POST /api/v1/simulate",
  "GET  /api/v1/policies",
  "GET  /api/v1/audit-logs",
];

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-semibold text-blue-600">
            DEVELOPER EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Integrate SecureAuth in Minutes
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600 leading-8">
            SecureAuth provides REST APIs and SDKs that enable
            developers to integrate adaptive authentication,
            policy evaluation and audit logging with minimal code.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Install */}

            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-lg transition">

              <div className="flex items-center gap-3">
                <Terminal className="text-blue-600" />

                <h3 className="text-xl font-semibold">
                  Quick Installation
                </h3>
              </div>

              <div className="mt-5 rounded-xl bg-slate-900 p-4 font-mono text-green-400">
                npm install @secureauth/sdk
              </div>
            </div>

            {/* API Example */}

            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-lg transition">

              <div className="flex items-center gap-3">
                <Code2 className="text-blue-600" />

                <h3 className="text-xl font-semibold">
                  Authentication Example
                </h3>
              </div>

              <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-slate-200">
{`const auth = new SecureAuth({
  apiKey: process.env.SECUREAUTH_KEY,
});

const result =
await auth.authenticate(request);`}
              </pre>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Button className="rounded-xl">
                <BookOpen className="mr-2 h-4 w-4" />
                View API Docs
              </Button>

              <Button
                variant="outline"
                className="rounded-xl"
              >
                <KeyRound className="mr-2 h-4 w-4" />
                Generate API Key
              </Button>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Features */}

            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-600" />

                <h3 className="text-xl font-semibold">
                  Platform Features
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">

                {features.map((feature) => (

                  <div
                    key={feature}
                    className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700"
                  >
                    {feature}
                  </div>

                ))}

              </div>

            </div>

            {/* Endpoints */}

            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">

              <div className="flex items-center gap-3">
                <Database className="text-blue-600" />

                <h3 className="text-xl font-semibold">
                  Available Endpoints
                </h3>
              </div>

              <div className="mt-5 space-y-3">

                {endpoints.map((endpoint) => (

                  <div
                    key={endpoint}
                    className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3"
                  >
                    <span className="font-mono text-sm">
                      {endpoint}
                    </span>

                    <Copy className="h-4 w-4 text-slate-500" />
                  </div>

                ))}

              </div>

            </div>

            {/* Security */}

            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-7 text-white">

              <div className="flex items-center gap-3">

                <Lock />

                <h3 className="text-xl font-semibold">
                  Enterprise Ready
                </h3>

              </div>

              <p className="mt-4 text-blue-100 leading-7">
                SecureAuth supports OAuth 2.0,
                OpenID Connect, Adaptive MFA,
                JWT authentication,
                audit logging,
                policy simulation,
                and multi-tenant deployments.
              </p>

              <Button
                variant="secondary"
                className="mt-6 rounded-xl"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}