import React from "react";

type Transaction = {
  date: string;
  description: string;
  application: string;
  type: string;
  amount: string;
  balance: string;
};

export default function TransactionsTab({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-[#c9d7e6] rounded-lg overflow-x-auto mb-8">
        <div className="grid grid-cols-6 text-[#4b5c6b] text-sm font-medium py-3 px-6">
          <div>Date/Time</div>
          <div>Description</div>
          <div>Application</div>
          <div>Type</div>
          <div>Amount</div>
          <div>Balance</div>
        </div>
      </div>
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <img src="/hot-air-balloon.png" alt="No Data" className="w-40 h-40 mb-4" />
          <div className="text-[#101828] text-lg font-medium">Data not Found</div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          {transactions.map((t, i) => (
            <div key={i} className="grid grid-cols-6 text-[#101828] text-sm py-3 px-6 border-b last:border-b-0">
              <div>{t.date}</div>
              <div>{t.description}</div>
              <div>{t.application}</div>
              <div>{t.type}</div>
              <div>{t.amount}</div>
              <div>{t.balance}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
