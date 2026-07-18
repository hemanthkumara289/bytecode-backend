import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const analysisSteps = [
  "Initializing AI Engine",
  "Analyzing Device Reputation",
  "Verifying Login Location",
  "Checking User Behaviour",
  "Evaluating Adaptive Policies",
  "Calculating Risk Score",
  "Generating Authentication Decision",
];

export default function LiveAIEngine({ running }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!running) {
      setCurrentStep(0);
      return;
    }

    let step = 0;

    const interval = setInterval(() => {
      step++;

      if (step < analysisSteps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-blue-100 p-3">
          <Cpu className="text-blue-600" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Live AI Decision Engine
          </h2>

          <p className="text-sm text-slate-500">
            Real-time adaptive authentication analysis
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {analysisSteps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: index <= currentStep ? 1 : 0.35,
            }}
            className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <span className="font-medium text-slate-700">
              {step}
            </span>

            {index < currentStep ? (
              <CheckCircle2
                className="text-green-600"
                size={20}
              />
            ) : index === currentStep && running ? (
              <LoaderCircle
                size={20}
                className="animate-spin text-blue-600"
              />
            ) : (
              <div className="h-5 w-5 rounded-full border border-slate-300" />
            )}
          </motion.div>
        ))}
      </div>

      {running && currentStep === analysisSteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 rounded-2xl bg-green-100 p-4 text-center font-semibold text-green-700"
        >
          ✔ AI Analysis Completed Successfully
        </motion.div>
      )}
    </motion.div>
  );
}