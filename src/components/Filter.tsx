"use client";

import { useEffect, useRef, useState } from "react";
import { InvoiceStatus } from "@/types/invoice";
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
        Filter by status
        <span className={`transition ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#1E2139] shadow-lg p-4 space-y-3 z-50">
          {options.map((status) => (
            <label
              key={status}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selected.includes(status)}
                onChange={() => toggle(status)}
                className="accent-purple-600"
              />
              <span className="capitalize group-hover:text-purple-500">
                {status}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
