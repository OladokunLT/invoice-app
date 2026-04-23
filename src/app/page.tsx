import InvoiceCard from "@/components/InvoiceCard";
import ThemeToggle from "@/components/ThemeToggle";
import { invoices } from "@/data/invoices";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Invoices</h1>

      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}
