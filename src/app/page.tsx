import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Invoice App — Theme Ready 🚀</h1>

      <ThemeToggle />
    </main>
  );
}
