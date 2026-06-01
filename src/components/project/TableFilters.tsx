import { Button } from "@/components/ui/button";

type FilterOption = {
	value: string;
	label: string;
	count?: number;
};

type TableFiltersProps = {
	options: FilterOption[];
	activeValue: string;
	onValueChange: (value: string) => void;
	actionLabel?: string;
	onActionClick?: () => void;
};

export function TableFilters({
	options,
	activeValue,
	onValueChange,
	actionLabel,
	onActionClick,
}: TableFiltersProps) {
	return (
		<div className="mb-3 flex items-center justify-between gap-3">
			<div className="inline-flex h-9 rounded-md bg-muted p-1 text-sm">
				{options.map((option) => {
					const isActive = activeValue === option.value;

					return (
						<button
							key={option.value}
							type="button"
							onClick={() => onValueChange(option.value)}
							className={
								isActive
									? "h-7 rounded-md border border-border bg-background px-3 font-medium text-foreground shadow-sm transition"
									: "h-7 rounded-md border border-transparent px-3 font-medium text-muted-foreground transition hover:text-foreground"
							}
						>
							{option.label}

							{option.count !== undefined && (
								<span className="ml-1 text-xs text-muted-foreground">
									{option.count}
								</span>
							)}
						</button>
					);
				})}
			</div>

			{actionLabel && onActionClick && (
				<Button type="button" onClick={onActionClick}>
					{actionLabel}
				</Button>
			)}
		</div>
	);
}
