"use client";

import { useState } from "react";
import InvoiceCard from "@/components/InvoiceCard";
import { useInvoices } from "@/context/InvoiceContext";
import Filter from "@/components/Filter";
import { InvoiceStatus } from "@/types/invoice";
import Image from "next/image";
import Link from "next/link";

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
      {/* <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <Filter selected={selected} setSelected={setSelected} />
      </div> */}
      <div className="flex justify-between items-center">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold">Invoices</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {invoices.length === 0
              ? "No invoices"
              : `There are ${invoices.length} invoices`}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Filter selected={selected} setSelected={setSelected} />

          <Link href="/new">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition">
              <span className="bg-white text-purple-600 w-6 h-6 flex items-center justify-center rounded-full">
                +
              </span>
              <span className="hidden sm:inline">New Invoice</span>
              <span className="sm:hidden">New</span>
            </button>
          </Link>
        </div>
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
