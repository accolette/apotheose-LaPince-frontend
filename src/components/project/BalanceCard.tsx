import { ArrowRight } from "lucide-react";

const balances = [
    {
        id: 1,
        from: "Steve",
        to: "Alice",
        amount: "45,20 €",
    },
    {
        id: 2,
        from: "Chloé",
        to: "Bob",
        amount: "120,78 €",
    },
    {
        id: 3,
        from: "Chloé",
        to: "Steve",
        amount: "60,00 €",
    },
];

export function BalanceCard() {
    return (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex items-baseline justify-between border-b border-border px-6 py-4">
                <h2 className="text-sm font-medium">Balance</h2>

                <p className="text-xs text-muted-foreground">3 transactions</p>
            </div>

            <ul className="divide-y divide-border">
                {balances.map((balance) => (
                    <li key={balance.id} className="flex items-center gap-3 px-6 py-4">
                        <div className="flex flex-1 items-center gap-1.5 text-sm">
                            <span className="font-medium">{balance.from}</span>
                            <ArrowRight className="size-3.5 text-muted-foreground" />
                            <span className="font-medium">{balance.to}</span>
                        </div>
                        <span className="tabular-nums text-sm font-semibold">
                            {balance.amount}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
