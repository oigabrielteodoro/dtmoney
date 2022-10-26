import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
};

const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
});

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactionsContext() {
  return useContext(TransactionsContext);
}
