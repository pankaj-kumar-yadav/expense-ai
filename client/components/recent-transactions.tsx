import { Transaction } from "../types/finance"
import { formatCurrency } from "../utils/finance"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"  // Fixed import path

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <ScrollArea className="h-[200px] w-full">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between space-x-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{transaction.description}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
            <div className={cn(
              "text-sm tabular-nums",
              transaction.type === 'income' ? "text-green-500" : "text-red-500"
            )}>
              {transaction.type === 'income' ? '+' : '-'}
              {formatCurrency(transaction.amount)}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

