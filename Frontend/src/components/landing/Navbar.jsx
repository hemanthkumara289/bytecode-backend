import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-3 transition hover:opacity-80"
        >
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
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            How it Works
          </button>

          <button
            onClick={() => scrollToSection("documentation")}
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Documentation
          </button>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              window.open(
                "https://github.com/DevOps-Tally/bytecode",
                "_blank"
              )
            }
          >
            GitHub
          </Button>

          <Button onClick={() => navigate("/login")}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}