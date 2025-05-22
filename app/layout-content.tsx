'use client'

import { useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/app/components/Navbar/page";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { state, isMobile } = useSidebar();

  const mainContentMargin = isMobile ? 'ml-0' : (state === 'expanded' ? 'ml-4' : 'ml-4');

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className={`flex-1 flex flex-col`}>
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 