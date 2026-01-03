import SendMoneyCard from "../components/SendMoneyCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Money without borders
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Send, spend, and receive money internationally with real exchange rates.
          </p>
        </div>

        {/* RIGHT */}
        <SendMoneyCard />

      </div>
    </main>
  );
}
