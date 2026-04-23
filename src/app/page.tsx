"use client";

import { useState } from "react";
import InvoiceCard from "@/components/InvoiceCard";
import { useInvoices } from "@/context/InvoiceContext";
import Filter from "@/components/Filter";
import { InvoiceStatus } from "@/types/invoice";
import Image from "next/image";

export default function Home() {
  const [selected, setSelected] = useState<InvoiceStatus[]>([]);
  const { invoices, loading } = useInvoices();

  if (loading) return <p>Loading...</p>;

  const filtered =
    selected.length === 0
      ? invoices
      : invoices.filter((inv) => selected.includes(inv.status));

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <Filter selected={selected} setSelected={setSelected} />
      </div>

      {/* List */}
      {filtered.length > 0 ? (
        filtered.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <Image
            src="/images/email_campaign_flatline.png"
            alt="No invoices"
            width={200}
            height={200}
          />

          <h2 className="mt-6 text-xl font-bold">There is nothing here</h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-sm">
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </div>
      )}
    </div>
  );
}
