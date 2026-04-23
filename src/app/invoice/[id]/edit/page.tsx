"use client";

import { useParams, useRouter } from "next/navigation";
import InvoiceForm from "@/components/InvoiceForm";
import { useInvoices } from "@/context/InvoiceContext";

export default function EditInvoicePage() {
  const { id } = useParams();
  const { invoices, updateInvoice, loading } = useInvoices();
  const router = useRouter();

  if (loading) return <p>Loading...</p>;

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) return <p>Not found</p>;

  return (
    <InvoiceForm
      initialData={invoice}
      onSubmit={(data) => {
        updateInvoice(data);
        router.push(`/invoice/${id}`);
      }}
    />
  );
}
