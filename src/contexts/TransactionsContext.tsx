import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

import { NewTransactionFormParams } from "src/components/NewTransactionModal";
import { api } from "src/lib/axios";

type TransactionType = "income" | "outcome";

export type Transaction = {
  id: number;
  description: string;
  type: TransactionType;
  price: number;
  category: string;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionsContextProps = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (data: NewTransactionFormParams) => Promise<void>;
};

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createNewTransaction = useCallback(
    async ({
      category,
      description,
      price,
      type,
    }: NewTransactionFormParams) => {
      const response = await api.post("transactions", {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
