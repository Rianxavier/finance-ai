import AddTransactionButton from "../_components/add-transaction-button";
import NavBar from "../_components/navbar";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const transaction = await db.transaction.findMany({});

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        {/* TITULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable
          columns={transactionColumns}
          data={JSON.parse(JSON.stringify(transaction))}
        />
      </div>
    </>
  );
};

export default TransactionsPage;
