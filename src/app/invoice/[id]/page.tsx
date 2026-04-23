import InvoiceDetailClient from "./InvoiceDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <InvoiceDetailClient id={id} />;
}
