"use client";

import { useState } from "react";
import { Invoice, InvoiceStatus } from "@/types/invoice";

interface Props {
  initialData?: Invoice;
  onSubmit: (invoice: Invoice) => void;
}

export default function InvoiceForm({ initialData, onSubmit }: Props) {
  const [clientName, setClientName] = useState(initialData?.clientName || "");
  const [clientEmail, setClientEmail] = useState(
    initialData?.clientEmail || "",
  );
  const [items, setItems] = useState(initialData?.items || []);
  const [errors, setErrors] = useState<string[]>([]);

  const validate = () => {
    const errs: string[] = [];

    if (!clientName) errs.push("Client name is required");
    if (!clientEmail.includes("@")) errs.push("Valid email required");
    if (items.length === 0) errs.push("At least one item required");

    setErrors(errs);
    return errs.length === 0;
  };

  const handleSubmit = (status: InvoiceStatus) => {
    if (!validate()) return;

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const invoice: Invoice = {
      id:
        initialData?.id || Math.random().toString(36).slice(2, 8).toUpperCase(),
      clientName,
      clientEmail,
      date: new Date().toISOString().split("T")[0],
      total,
      status,
      items,
    };

    onSubmit(invoice);
  };

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), name: "", quantity: 1, price: 0 },
    ]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">
        {initialData ? "Edit Invoice" : "New Invoice"}
      </h2>

      {errors.length > 0 && (
        <div className="text-red-500">
          {errors.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      )}

      <input
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        placeholder="Client Email"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {/* Items */}
      <div>
        <button
          type="button"
          onClick={addItem}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          + Add Item
        </button>

        {items.map((item, i) => (
          <div key={item.id} className="flex gap-2 mt-2">
            <input
              placeholder="Name"
              value={item.name}
              onChange={(e) => {
                const newItems = [...items];
                newItems[i].name = e.target.value;
                setItems(newItems);
              }}
              className="flex-1 p-2 border rounded"
            />

            <input
              type="number"
              placeholder="Qtn"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...items];
                newItems[i].quantity = Number(e.target.value) || 0;
                setItems(newItems);
              }}
              className="w-20 p-2 border rounded"
            />

            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => {
                const newItems = [...items];
                newItems[i].price = Number(e.target.value);
                setItems(newItems);
              }}
              className="w-24 p-2 border rounded"
            />
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => handleSubmit("draft")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Save Draft
        </button>

        <button
          onClick={() => handleSubmit("pending")}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Save & Send
        </button>
      </div>
    </div>
  );
}
