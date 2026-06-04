import { ArrowDownLeft, ArrowUpRight, Folder, Wallet } from "lucide-react";
import { useProjectsQuery } from "@/lib/useProjectsQuery";

import { StatCard } from "@/components/projects/StatCard";

export function UserStats() {
	const { data } = useProjectsQuery();
	const activeProjectsCount = data?.pages[0]?.total ?? 0;

	return (
		<section className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
			<StatCard icon={Folder} label="Projets actifs" value={String(activeProjectsCount)} />

			<StatCard icon={ArrowDownLeft} label="Tu dois" value="45,20 €" />

			<StatCard icon={ArrowUpRight} label="On te doit" value="128,40 €" />

			<StatCard icon={Wallet} label="Solde net" value="+83,20 €" />
		</section>
	);
}
