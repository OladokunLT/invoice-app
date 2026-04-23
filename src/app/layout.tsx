import type { Metadata } from "next";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { InvoiceProvider } from "@/context/InvoiceContext";
import Sidebar from "@/components/Sidebar";

const leagueSpartan = League_Spartan({
  variable: "--font-league",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Invoice Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <body className="font-sans bg-white text-black dark:bg-[#141625] dark:text-white transition-colors">
        <ThemeProvider>
          <InvoiceProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
              {/* Sidebar */}
              <Sidebar />

              {/* Main content */}
              <main className="flex-1 p-6 md:p-10">{children}</main>
            </div>
          </InvoiceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
