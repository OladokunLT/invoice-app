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
      <body className="font-sans bg-[#F8F8FB] text-black dark:bg-[#141625] dark:text-white transition-colors">
        <ThemeProvider>
          <InvoiceProvider>
            <div className="max-w-360 mx-auto flex flex-col md:flex-row min-h-screen">
              {/* Sidebar */}
              <Sidebar />

              {/* Main content */}
              <main className="md:max-w-182.5 md:mx-auto flex-1 p-6 md:p-10">
                {children}
              </main>
              {/* <main className="lg:ml-28 p-6 max-w-5xl mx-auto">{children}</main> */}
            </div>
          </InvoiceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
