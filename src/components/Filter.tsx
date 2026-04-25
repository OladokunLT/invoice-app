"use client";

import { useEffect, useRef, useState } from "react";
import { InvoiceStatus } from "@/types/invoice";
import Image from "next/image";
interface Props {
  selected: InvoiceStatus[];
  setSelected: (value: InvoiceStatus[]) => void;
}

export default function Filter({ selected, setSelected }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options: InvoiceStatus[] = ["draft", "pending", "paid"];

  const toggle = (status: InvoiceStatus) => {
    if (selected.includes(status)) {
      setSelected(selected.filter((s) => s !== status));
    } else {
      setSelected([...selected, status]);
    }
  };

  //   Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="font-medium flex items-center gap-2 cursor-pointer"
      >
        Filter <span className="hidden md:block">by status</span>
        <span className={`transition ${open ? "-rotate-90" : "rotate-90"}`}>
          <Image
            src="/images/greater-than.png"
            alt="toggle open filter"
            width={4.23}
            height={8.46}
          />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-[#1E2139] shadow-[0px_10px_20px_0px_#48549F40] p-4 space-y-3 z-50 rounded-lg">
          {options.map((status) => (
            <label
              key={status}
              className="flex items-center gap-3 cursor-pointer group relative font-medium"
            >
              <input
                type="checkbox"
                checked={selected.includes(status)}
                onChange={() => toggle(status)}
                className="peer w-5 h-5 appearance-none rounded 
               bg-[#DFE3FA] border-2 border-transparent 
               group-hover:border-[#7C5DFA] 
               checked:bg-[#7C5DFA] checked:border-[#7C5DFA] 
               transition-all cursor-pointer flex items-center justify-center relative"
              />

              {/* Custom white checkmark */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1 w-3 h-3 text-white pointer-events-none 
               opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="capitalize">{status}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
