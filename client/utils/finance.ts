import { Transaction, CategoryTotal } from "../types/finance"

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const calculateBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' 
      ? acc + transaction.amount 
      : acc - transaction.amount
  }, 0)
}

export const getRecentTransactions = (transactions: Transaction[], limit: number = 3): Transaction[] => {
  return [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export const calculateMonthlyTotals = (transactions: Transaction[]): { income: number; expense: number } => {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  
  return transactions
    .filter(t => {
      const date = new Date(t.date)
      return date.getMonth() === currentMonth && date.getFullYear() === currentYear
    })
    .reduce((acc, t) => {
      if (t.type === 'income') {
        acc.income += t.amount
      } else {
        acc.expense += t.amount
      }
      return acc
    }, { income: 0, expense: 0 })
}

