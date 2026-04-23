import { Invoice } from "@/types/invoice";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import { formatCurrency, formatDate } from "@/utils/format";

export default function InvoiceCard({ invoice }: { invoice: Invoice }) {
  return (
    <Link href={`/invoice/${invoice.id}`}>
      <div className="bg-white dark:bg-[#1E2139] p-4 md:p-6 rounded-lg shadow hover:scale-[1.01] transition cursor-pointer">
        {/* MOBILE LAYOUT */}
        <div className="md:hidden space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">#{invoice.id}</h2>
            <StatusBadge status={invoice.status} />
          </div>

          <p className="text-gray-500 dark:text-gray-400">
            {invoice.clientName}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{invoice.date}</span>
            <span className="font-bold text-lg">£ {invoice.total}</span>
          </div>
        </div>

        {/* DESKTOP / TABLET LAYOUT */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <h2 className="font-bold w-1/6">#{invoice.id}</h2>

          <span className="text-gray-500 w-1/5">
            Due {formatDate(invoice.date)}
          </span>

          <span className="text-gray-500 w-1/4">{invoice.clientName}</span>

          <span className="font-bold w-1/5 text-right">
            £ {formatCurrency(invoice.total)}
          </span>

          <div className="w-1/6 flex justify-end">
            <StatusBadge status={invoice.status} />
          </div>
        </div>
      </div>
    </Link>
  );
}
