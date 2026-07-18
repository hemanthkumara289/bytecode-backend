import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h1 className="font-bold text-slate-900">
              SecureAuth
            </h1>

            <p className="text-xs text-slate-500">
              Adaptive Authentication
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
            Features
          </a>

          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
            How it Works
          </a>

          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
            Documentation
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="outline">
            GitHub
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}