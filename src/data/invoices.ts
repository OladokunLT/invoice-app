import { Invoice } from "@/types/invoice";

export const invoices: Invoice[] = [
  {
    id: "RT3080",
    clientName: "Aliko Dangote",
    clientEmail: "aliko@dangote.com",
    date: "2026-04-01",
    total: 1800,
    status: "paid",
    items: [{ id: "1", name: "Sugar", quantity: 2, price: 900 }],
  },
  {
    id: "XM9141",
    clientName: "Mike Adenuga",
    clientEmail: "mike@adenuga.com",
    date: "2026-04-10",
    total: 1200,
    status: "pending",
    items: [{ id: "1", name: "Glo SIM", quantity: 3, price: 400 }],
  },
  {
    id: "RG0314",
    clientName: "Lukman Oladokun",
    clientEmail: "lukman@oladokun.com",
    date: "2026-04-15",
    total: 500,
    status: "draft",
    items: [{ id: "1", name: "Next.js Textbook", quantity: 1, price: 500 }],
  },
];
