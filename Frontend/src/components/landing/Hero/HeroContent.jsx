import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroContent = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-xl"
    >
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        <ShieldCheck size={16} />
        Policy-Driven Adaptive Authentication
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
        Authentication
        <span className="block text-blue-600">
          that adapts.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg leading-8 text-slate-600">
        SecureAuth enables organizations to build intelligent authentication
        policies based on device trust, location, transaction risk, and user
        behavior—all without hardcoding authentication logic.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Button
          size="lg"
          onClick={() => navigate("/login")}
          className="rounded-xl px-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => navigate("/dashboard")}
          className="rounded-xl px-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
        >
          <Play className="mr-2 h-4 w-4" />
          Live Demo
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
        <div className="flex items-center gap-2 transition hover:text-slate-900">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          Multi-Tenant
        </div>

        <div className="flex items-center gap-2 transition hover:text-slate-900">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          Adaptive MFA
        </div>

        <div className="flex items-center gap-2 transition hover:text-slate-900">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          Audit Ready
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;