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
    <div className=" space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-medium md:font-bold">Invoices</h1>
          <p className="text-gray-500 dark:text-gray-400 md:hidden">
            {invoices.length === 0
              ? "No invoices"
              : `${invoices.length} invoices`}
          </p>
          <p className="text-gray-500 dark:text-gray-400 hidden md:inline">
            {invoices.length === 0
              ? "No invoices"
              : `There are ${invoices.length} total invoices`}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Filter selected={selected} setSelected={setSelected} />

          <Link href="/new">
            <button className="bg-[#7C5DFA] hover:bg-[#9277FF] text-white px-2 py-2 rounded-3xl flex items-center gap-2 transition cursor-pointer font-medium pr-4">
              <span className="bg-white text-[#7C5DFA] hover:text-[#9277FF] w-8 h-8 flex items-center justify-center rounded-full pt-1 font-medium text-2xl">
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
        filtered.map((invoice, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <InvoiceCard key={invoice.id} invoice={invoice} />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <Image
            src="/images/email_campaign_flatline.png"
            alt="No invoices"
            width={200}
            height={200}
          />

          <h2 className="mt-8 text-xl font-bold">There is nothing here</h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-sm mt-2">
            Create an invoice by clicking the <strong>New</strong> button and
            get started
          </p>
        </div>
      )}
    </div>
  );
}
