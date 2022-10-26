import { Header } from "src/components/Header";
import { Summary } from "src/components/Summary";
import { useTransactionsContext } from "src/contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "src/lib/formatter";
import { SearchForm } from "./SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./Transactions.styles";

export function Transactions() {
  const { transactions } = useTransactionsContext();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
