import { useTheme } from "styled-components";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useTransactionsContext } from "src/contexts/TransactionsContext";

import { SummaryCard, SummaryContainer } from "./Summary.styles";

export function Summary() {
  const theme = useTheme();
  const { transactions } = useTransactionsContext();

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "income":
          return {
            income: acc.income + transaction.price,
            outcome: acc.outcome,
            total: acc.total + transaction.price,
          };
        case "outcome":
          return {
            income: acc.income,
            outcome: acc.outcome + transaction.price,
            total: acc.total - transaction.price,
          };
        default:
          return acc;
      }
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme["green-500"]} />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme["red-500"]} />
        </header>
        <strong>{summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
