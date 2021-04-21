export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);
}

export function formatDate(date: string) {
  const dateConverted = new Date(date);

  return new Intl.DateTimeFormat('pt-BR').format(dateConverted);
}