export type InvoiceStatus = "draft" | "paid" | "pending";

export interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  date: string;
  total: number;
  status: InvoiceStatus;
  items: InvoiceItem[];
}
