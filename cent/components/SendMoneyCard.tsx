"use client";

import { useState } from "react";

export default function SendMoneyCard() {
  const [sendAmount, setSendAmount] = useState<number>(1000);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");

  const rates: Record<string, number> = {
    "INR-USD": 0.012,
    "USD-INR": 83,
  };

  const rateKey = `${fromCurrency}-${toCurrency}`;
  const exchangeRate = rates[rateKey] ?? 1;

  const safeAmount = isNaN(sendAmount) || sendAmount < 0 ? 0 : sendAmount;

  const feeRate = 0.007;
  const fee = safeAmount * feeRate;
  const amountAfterFee = safeAmount - fee;

  const receiveAmount =
    safeAmount > 0
      ? (amountAfterFee * exchangeRate).toFixed(2)
      : "0.00";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold">Send money</h2>
        <p className="text-sm text-gray-500 mt-1">
          Fast, low-cost international transfers
        </p>
      </div>

      {/* YOU SEND */}
      <div className="space-y-1">
        <label className="text-sm text-gray-500">You send</label>
        <div className="flex items-center gap-4 border rounded-xl px-4 py-4">
          <input
            type="number"
            min="0"
            value={safeAmount}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0) setSendAmount(value);
            }}
            className="text-3xl font-semibold outline-none w-full"
          />

          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="text-sm font-medium bg-gray-100 px-3 py-1.5 rounded-lg outline-none"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>

      {/* RECIPIENT GETS */}
      <div className="space-y-1">
        <label className="text-sm text-gray-500">Recipient gets</label>
        <div className="flex items-center gap-4 border rounded-xl px-4 py-4 bg-gray-50">
          <input
            type="text"
            value={receiveAmount}
            readOnly
            className="text-3xl font-semibold outline-none w-full bg-gray-50"
          />

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="text-sm font-medium bg-white px-3 py-1.5 rounded-lg outline-none"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      {/* FEES */}
      <div className="pt-4 border-t space-y-3 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Transfer fee</span>
          <span>{fee.toFixed(2)} {fromCurrency}</span>
        </div>

        <div className="flex justify-between">
          <span>Exchange rate</span>
          <span>
            1 {fromCurrency} = {exchangeRate} {toCurrency}
          </span>
        </div>

        <div className="flex justify-between font-semibold text-black pt-3 border-t">
          <span>Total cost</span>
          <span>{safeAmount.toFixed(2)} {fromCurrency}</span>
        </div>
      </div>

      {/* CTA */}
      <button
        disabled={safeAmount <= 0}
        className={`w-full py-3.5 rounded-full font-medium transition
          ${
            safeAmount <= 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
      >
        Continue
      </button>
    </div>
  );
}
