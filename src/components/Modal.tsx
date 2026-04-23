"use client";

import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Close on outside click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === ref.current) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      ref={ref}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white dark:bg-[#1E2139] p-6 rounded-lg w-[90%] max-w-md">
        {children}
      </div>
    </div>
  );
}
