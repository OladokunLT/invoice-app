import { invoices } from "@/data/invoices";
import StatusBadge from "@/components/StatusBadge";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function InvoiceDetail({ params }: Props) {
  const { id } = await params; // ✅ THIS IS THE FIX

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white dark:bg-[#1E2139] p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <span>Status</span>
          <StatusBadge status={invoice.status} />
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
            Edit
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Delete
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Mark as Paid
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white dark:bg-[#1E2139] p-6 rounded-lg space-y-6">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-lg">#{invoice.id}</h2>
            <p className="text-gray-500">{invoice.clientName}</p>
          </div>

          <div className="text-right text-gray-500">
            <p>Client Email</p>
            <p>{invoice.clientEmail}</p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#252945] p-4 rounded">
          {invoice.items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>£ {item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between bg-black text-white p-4 rounded">
          <span>Grand Total</span>
          <span className="font-bold">£ {invoice.total}</span>
        </div>
      </div>
    </div>
  );
}
