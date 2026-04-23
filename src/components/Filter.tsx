"use client";

import { InvoiceStatus } from "@/types/invoice";
interface Props {
  selected: InvoiceStatus[];
  setSelected: (value: InvoiceStatus[]) => void;
}

export default function Filter({ selected, setSelected }: Props) {
  const options: InvoiceStatus[] = ["draft", "pending", "paid"];

  const toggle = (status: InvoiceStatus) => {
    if (selected.includes(status)) {
      setSelected(selected.filter((s) => s !== status));
    } else {
      setSelected([...selected, status]);
    }
  };

  return (
    <div className="flex gap-3">
      {options.map((status) => (
        <label key={status} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(status)}
            onChange={() => toggle(status)}
            title="filter"
          />
          <span className="capitalize">{status}</span>
        </label>
      ))}
    </div>
  );
}
