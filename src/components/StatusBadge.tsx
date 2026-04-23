import { InvoiceStatus } from "@/types/invoice";

export default function ({ status }: { status: InvoiceStatus }) {
  const styles = {
    draft: "bg-gray-400 text-gray-900",
    pending: "bg-yellow-400 text-yellow-900",
    paid: "bg-green-400 text-green-900",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}
