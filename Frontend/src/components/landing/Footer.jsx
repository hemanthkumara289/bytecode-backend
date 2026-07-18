import { ShieldCheck, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-2">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                SecureAuth
              </h2>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Policy-driven adaptive authentication platform that protects
              enterprise applications with intelligent, risk-based access
              decisions.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Globe className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">Product</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Policy Builder
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Simulation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  API
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2026 SecureAuth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}