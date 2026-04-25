import { Invoice } from "@/types/invoice";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import { formatCurrency, formatDate } from "@/utils/format";
import Image from "next/image";

export default function InvoiceCard({ invoice }: { invoice: Invoice }) {
  return (
    <Link href={`/invoice/${invoice.id}`}>
      <div className="bg-white dark:bg-[#1E2139] p-4 md:p-6 rounded-lg shadow-[0px_10px_10px_-10px_#48549F1A] hover:border hover:border-[#7C5DFA] transition cursor-pointer text-[13px]">
        {/* MOBILE LAYOUT */}
        <div className="md:hidden space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">#{invoice.id}</h2>
            <p className="text-[#858BB2] font-medium dark:text-gray-400">
              {invoice.clientName}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-[#858BB2] font-medium">
                Due {formatDate(invoice.date)}
              </p>
              <p className="font-bold ">£ {formatCurrency(invoice.total)}</p>
            </div>
            <StatusBadge status={invoice.status} />
          </div>
        </div>

        {/* DESKTOP / TABLET LAYOUT */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <h2 className="font-bold w-1/6">
            <span className="text-[#858BB2]">#</span>
            {invoice.id}
          </h2>

          <span className="text-[#858BB2] font-medium w-1/5">
            Due {formatDate(invoice.date)}
          </span>

          <span className="text-[#858BB2] font-medium w-1/4">
            {invoice.clientName}
          </span>

          <span className="font-bold w-1/5 text-right">
            £ {formatCurrency(invoice.total)}
          </span>

          <div className="w-1/6 flex justify-end">
            <StatusBadge status={invoice.status} />
          </div>
          <Image
            src="/images/greater-than.png"
            alt="Arrow Right"
            width={4}
            height={8}
            className="hidden md:block"
          />
        </div>
      </div>
    </Link>
  );
}
