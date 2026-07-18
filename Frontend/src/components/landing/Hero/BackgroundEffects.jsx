const BackgroundEffects = () => {
  return (
    <>
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      {/* Blue Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Indigo Glow */}
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

      {/* Top Glow */}
      <div className="absolute top-0 right-1/3 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
};

export default BackgroundEffects;