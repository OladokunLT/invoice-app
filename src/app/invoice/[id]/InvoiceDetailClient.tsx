"use client";

import StatusBadge from "@/components/StatusBadge";
import { useInvoices } from "@/context/InvoiceContext";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";
import { formatDate, formatCurrency } from "@/utils/format";
import Image from "next/image";

export default function InvoiceDetailClient({ id }: { id: string }) {
  const [showModal, setShowModal] = useState(false);
  const { invoices, markAsPaid, deleteInvoice, loading } = useInvoices();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal && ref.current) {
      ref.current.focus();
    }
  }, [showModal]);

  if (loading) return <p>Loading...</p>;

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) return <p>Invoice not found</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button
        onClick={() => router.back()}
        className="text-sm font-semibold hover:text-[#888EB0] flex items-center gap-4 cursor-pointer"
      >
        <Image
          src="/images/greater-than.png"
          alt="Go Back"
          width={8.46}
          height={4.23}
          className="rotate-180"
        />{" "}
        Go back
      </button>

      {/* Status + Actions */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white dark:bg-[#1E2139] p-4 rounded-lg">
        <div className="flex items-center justify-between md:justify-start gap-4">
          <span className="text-secondary">Status</span>
          <StatusBadge status={invoice.status} />
        </div>

        <div className="hidden md:flex gap-2 md:gap-3">
          <Link href={`/invoice/${invoice.id}/edit`}>
            <button className="btn-edit">Edit</button>
          </Link>

          <button onClick={() => setShowModal(true)} className="btn-delete">
            Delete
          </button>

          <button
            onClick={() => markAsPaid(invoice.id)}
            disabled={invoice.status !== "pending"}
            className="btn-primary "
          >
            Mark as Paid
          </button>
        </div>
      </div>

      {/* Invoice Body */}
      <div className="bg-white dark:bg-[#1E2139] p-6 rounded-lg mb-25 md:space-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Left */}
          <div>
            <h2 className="font-bold text-lg">
              <span className="text-gray-400">#</span>
              {invoice.id}
            </h2>
            <p className="text-secondary">{invoice.description}</p>
          </div>

          {/* Right (Sender Address) */}
          <div className="text-secondary text-sm md:text-right space-y-1">
            <p>{invoice.senderAddress?.street}</p>
            <p>{invoice.senderAddress?.city}</p>
            <p>{invoice.senderAddress?.postCode}</p>
            <p>{invoice.senderAddress?.country}</p>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {/* Dates */}
          <div className="space-y-4">
            <div>
              <p className="text-secondary">Invoice Date</p>
              <p className="font-bold">
                {formatDate(invoice.createdAt || invoice.date)}
              </p>
            </div>

            <div>
              <p className="text-secondary">Payment Due</p>
              <p className="font-bold">
                {formatDate(invoice.paymentDue || invoice.date)}
              </p>
            </div>
          </div>

          {/* Bill To */}
          <div>
            <p className="text-secondary mb-1">Bill To</p>
            <p className="font-bold">{invoice.clientName}</p>
            <div className="text-secondary mt-1 space-y-1">
              <p>{invoice.clientAddress?.street}</p>
              <p>{invoice.clientAddress?.city}</p>
              <p>{invoice.clientAddress?.postCode}</p>
              <p>{invoice.clientAddress?.country}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <p className="text-secondary mb-1">Sent to</p>
            <p className="font-bold">{invoice.clientEmail}</p>
          </div>
        </div>

        {/* 🧮 Items Table */}
        <div className="rounded-lg overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block bg-[#F9FAFE] dark:bg-[#252945] p-6">
            <div className="grid grid-cols-5 text-secondary mb-4 text-sm">
              <span className="col-span-2">Item Name</span>
              <span>QTY.</span>
              <span>Price</span>
              <span className="text-right">Total</span>
            </div>

            {invoice.items.map((item) => (
              <div key={item.id} className="grid grid-cols-5 mb-3">
                <span className="col-span-2 font-bold">{item.name}</span>
                <span>{item.quantity}</span>
                <span>{formatCurrency(item.price)}</span>
                <span className="text-right font-bold">
                  {formatCurrency(item.quantity * item.price)}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden bg-[#F9FAFE] dark:bg-[#252945] p-4 space-y-4">
            {invoice.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-secondary text-sm">
                    {item.quantity} x {formatCurrency(item.price)}
                  </p>
                </div>
                <p className="font-bold">
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-[#373B53] text-white flex justify-between p-6">
            <span className="md:hidden">Amount Due</span>
            <span className="hidden md:inline">Grand Total</span>
            <span className="text-xl font-bold">
              {formatCurrency(invoice.total)}
            </span>
          </div>
        </div>
      </div>

      {/* 🗑️ Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div ref={ref} tabIndex={-1}>
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>

          <p className="text-secondary mb-6">
            Are you sure you want to delete invoice #{invoice.id}? This action
            cannot be undone.
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowModal(false)}
              className="btn-secondary"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                deleteInvoice(invoice.id);
                router.push("/");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-full"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* 📱 Mobile Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1E2139] p-4 flex justify-center gap-3 md:hidden shadow-lg">
        <Link href={`/invoice/${invoice.id}/edit`}>
          <button className="btn-edit">Edit</button>
        </Link>

        <button onClick={() => setShowModal(true)} className="btn-delete">
          Delete
        </button>

        <button onClick={() => markAsPaid(invoice.id)} className="btn-primary">
          Mark as Paid
        </button>
      </div>
    </div>
  );
}
