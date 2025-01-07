import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { formatCurrency } from "../utils/finance"

interface BalanceCardProps {
  type: 'balance' | 'income' | 'expense'
  amount: number
  label: string
}

export function BalanceCard({ type, amount, label }: BalanceCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{label}</p>
        {type !== 'balance' && (
          type === 'income' ? (
            <ArrowUpIcon className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 text-red-500" />
          )
        )}
      </div>
      <div className={`mt-2 text-2xl font-bold ${
        type === 'income' ? 'text-green-500' : 
        type === 'expense' ? 'text-red-500' : ''
      }`}>
        {type === 'income' && '+'}
        {type === 'expense' && '-'}
        {formatCurrency(amount)}
      </div>
    </div>
  )
}

