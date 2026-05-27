import { CtaSection } from "@/components/layout/CtaSection";
import { FeatureGrid } from "@/components/layout/FeatureGrid";
import { Hero } from "@/components/layout/Hero";
import { PublicFooter } from "@/components/layout/Publicfooter";
import { PublicHeader } from "@/components/layout/PublicHeader";

export function HomePage() {
	return (
		<div className="min-h-screen w-full">
			<PublicHeader />

			<main>
				<Hero />
				<FeatureGrid />
				<CtaSection />
			</main>

			<PublicFooter />
		</div>
	);
}
