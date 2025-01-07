import { Card } from "@/components/ui/card"
import { Transaction } from "../types/finance"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

interface SpendingChartProps {
  transactions: Transaction[]
}

export function SpendingChart({ transactions }: SpendingChartProps) {
  const data = transactions
    .filter(t => t.type === 'expense')
    .map(t => ({
      date: t.date,
      amount: t.amount
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <ChartContainer
      config={{
        amount: {
          label: "Spending",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[200px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="amount"
            strokeWidth={2}
            activeDot={{
              r: 4,
            }}
            style={{
              stroke: "var(--color-amount)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

