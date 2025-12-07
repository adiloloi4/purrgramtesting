import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 min-h-screen relative overflow-hidden bg-black">
        {/* Ambient background effects - matching landing page vibe */}
        <div className="fixed inset-0 pointer-events-none z-0">
             <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-40" />
             <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-40" />
        </div>
        
        <div className="relative z-10">
            {children}
        </div>
      </main>
    </div>
  );
}

