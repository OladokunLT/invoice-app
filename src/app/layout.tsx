import type { Metadata } from "next";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
