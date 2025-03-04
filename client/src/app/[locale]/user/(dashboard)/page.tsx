"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { PlusIcon } from 'lucide-react'
import { Transaction } from "@/types/finance"
// import { SpendingChart } from "@/components/spending-chart"
// import { RecentTransactions } from "@/components/recent-transactions"
// import { BalanceCard } from "@/components/balance-card"
// import { calculateBalance, calculateMonthlyTotals, getRecentTransactions } from "@/utils/finance"
// import { Transaction } from "@/types/finance"

// Sample initial data
const initialTransactions: Transaction[] = [
    {
        id: "1",
        type: "income",
        amount: 5000,
        category: "Salary",
        description: "Monthly salary",
        date: "2024-01-01"
    },
    {
        id: "2",
        type: "expense",
        amount: 1000,
        category: "Rent",
        description: "Monthly rent",
        date: "2024-01-02"
    },
    {
        id: "3",
        type: "expense",
        amount: 200,
        category: "Groceries",
        description: "Weekly groceries",
        date: "2024-01-03"
    },
    {
        id: "4",
        type: "income",
        amount: 1000,
        category: "Freelance",
        description: "Web development project",
        date: "2024-01-04"
    }
]

export default function Dashboard() {
    // const [transactions] = useState<Transaction[]>(initialTransactions)

    // const balance = calculateBalance(transactions)
    // const monthlyTotals = calculateMonthlyTotals(transactions)
    // const recentTransactions = getRecentTransactions(transactions)

    return (
        <div className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Finance Dashboard</h1>
                <Button>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add Transaction
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Main Balance Card - Spans 2 columns */}
                <Card className="md:col-span-2 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Total Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            {/* <BalanceCard
                                type="balance"
                                amount={balance}
                                label="Current Balance"
                            />
                            <BalanceCard
                                type="income"
                                amount={monthlyTotals.income}
                                label="Monthly Income"
                            />
                            <BalanceCard
                                type="expense"
                                amount={monthlyTotals.expense}
                                label="Monthly Expenses"
                            /> */}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity - Spans 2 rows */}
                <Card className="md:row-span-2">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* <RecentTransactions transactions={recentTransactions} /> */}
                    </CardContent>
                </Card>

                {/* Spending Trends */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Spending Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* <SpendingChart transactions={transactions} /> */}
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Monthly Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-muted-foreground">Savings Rate</p>
                                <p className="text-2xl font-bold">
                                    {Math.round((monthlyTotals.income - monthlyTotals.expense) / monthlyTotals.income * 100)}%
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-muted-foreground">Transactions</p>
                                <p className="text-2xl font-bold">{transactions.length}</p>
                            </div>
                        </div> */}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

