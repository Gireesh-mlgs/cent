import SendMoneyCard from "../../components/SendMoneyCard";

export default function SendMoneyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-semibold mb-8">
          Send money
        </h1>

        <div className="max-w-md">
          <SendMoneyCard />
        </div>

      </div>
    </main>
  );
}
