"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="bg-[#1E2139] text-white flex md:flex-col items-center justify-between md:justify-start md:w-24 w-full h-20 md:h-screen md:rounded-tr-[20px] md:rounded-br-[20px]">
      {/* Logo */}
      <div className="w-20 h-20 md:w-full md:h-24 flex items-center justify-center rounded-r-2xl md:rounded-none">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* spacer */}
      <div className="flex-1 hidden md:block" />

      {/* Bottom Section */}
      <div className="flex items-center gap-4 p-4 md:flex-col md:gap-6">
        <ThemeToggle />

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/images/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </aside>
  );
}
