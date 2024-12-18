import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  Wallet2Icon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expenseTotal: number;
  userCanAddTransaction?: boolean;
}

const SummaryCards = async ({
  balance,
  investmentsTotal,
  depositsTotal,
  expenseTotal,
  userCanAddTransaction,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}
      <SummaryCard
        icon={<Wallet2Icon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />

      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investimento"
          amount={investmentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={expenseTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
