import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "src/contexts/TransactionsContext";
import { useMemo } from "react";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  const summary = useMemo(
    () =>
      transactions.reduce(
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
      ),
    [transactions]
  );

  return summary;
}
