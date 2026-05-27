type BudgetProgressProps = {

    spent: string;
    budget: string;
    percent: number;

};

export function BudgetProgress({

    spent,
    budget,
    percent,

}: BudgetProgressProps) {

    return (
        <div className="w-40">
            <div className="mb-1 flex items-baseline justify-between text-xs">
                <span className="font-medium">{spent}</span>
                <span className="text-muted-foreground">
                    / {budget}
                </span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-muted">
                <div
                    className="h-full rounded-full bg-foreground"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );

}