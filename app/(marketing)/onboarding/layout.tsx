export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Ambient background effects - matching dashboard */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[150px] opacity-30" />
      </div>
      {children}
    </div>
  );
}

