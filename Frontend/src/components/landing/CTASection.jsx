import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-widest text-blue-100">
            Ready to Get Started?
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Secure Your Applications
            <br />
            with Adaptive Authentication
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Replace traditional authentication with intelligent,
            policy-driven access decisions powered by real-time risk analysis.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
              Start Free Trial
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10">
              Schedule Demo
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}