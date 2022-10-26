import { useTheme } from "styled-components";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./Summary.styles";
import { priceFormatter } from "src/lib/formatter";
import { useSummary } from "src/hooks/useSummary";

export function Summary() {
  const theme = useTheme();
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme["green-500"]} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme["red-500"]} />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
