"use client";

import { useRouter } from "next/navigation";
import InvoiceForm from "@/components/InvoiceForm";
import { useInvoices } from "@/context/InvoiceContext";

export default function NewInvoicePage() {
  const { addInvoice } = useInvoices();
  const router = useRouter();

  return (
    <InvoiceForm
      onSubmit={(invoice) => {
        addInvoice(invoice);
        router.push("/");
      }}
    />
  );
}
