'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "./components/Navbar/page";
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from 'next/navigation';
import { AuthProvider } from './context/AuthContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNotesPage = pathname === '/notes';

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Provider store={store}>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SidebarProvider>
                {isNotesPage && <AppSidebar />}
                <div className={`flex-1 w-full flex flex-col ${isNotesPage ? '' : 'ml-0'}`}>
                  <Navbar />
                  <main className="flex-1 overflow-y-auto">
                    {children}
                  </main>
                </div>
              </SidebarProvider>
            </ThemeProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
