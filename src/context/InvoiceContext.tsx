"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Invoice } from "@/types/invoice";
import { invoices as initialData } from "@/data/invoices";

interface InvoiceContextType {
  invoices: Invoice[];
  setInvoices: (data: Invoice[]) => void;
  markAsPaid: (id: string) => void;
  deleteInvoice: (id: string) => void;
  loading: boolean;
  addInvoice: (invoice: Invoice) => void;
  updateInvoice: (invoice: Invoice) => void;
}

const InvoiceContext = createContext<InvoiceContextType | null>(null);

export const InvoiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("invoices");
    if (stored) {
      setInvoices(JSON.parse(stored));
    } else {
      setInvoices(initialData);
    }
    setLoading(false);
  }, []);

  // Persist
  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const markAsPaid = (id: string) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === id && inv.status === "pending"
          ? { ...inv, status: "paid" }
          : inv,
      ),
    );
  };

  const deleteInvoice = (id: string) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  const addInvoice = (invoice: Invoice) => {
    setInvoices((prev) => [invoice, ...prev]);
  };

  const updateInvoice = (updated: Invoice) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === updated.id ? updated : inv)),
    );
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        setInvoices,
        markAsPaid,
        deleteInvoice,
        addInvoice,
        updateInvoice,
        loading,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoices = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoices must be used within InvoiceProvider");
  }
  return context;
};

// export default InvoiceContext;
