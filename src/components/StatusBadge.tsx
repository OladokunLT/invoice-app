import { InvoiceStatus } from "@/types/invoice";

const styles = {
  draft: "bg-gray-100 text-gray-600",
  pending: "bg-yellow-100 text-yellow-700",
  paid: "bg-green-100 text-green-700",
};

const dot = {
  draft: "bg-gray-500",
  pending: "bg-yellow-500",
  paid: "bg-green-500",
};

export default function StatusBadge({ status }: { status: InvoiceStatus }) {
  return (
    <span
      className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium capitalize ${styles[status]}`}
    >
      <span className={`w-2 h-2 rounded-full ${dot[status]}`} />
      {status}
    </span>
  );
}
