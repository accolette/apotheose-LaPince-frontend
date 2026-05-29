import { CtaSection } from "@/components/landingPage/CtaSection";
import { FeatureGrid } from "@/components/landingPage/FeatureGrid";
import { Hero } from "@/components/landingPage/Hero";
import { PublicFooter } from "@/components/landingPage/PublicFooter";
import { PublicHeader } from "@/components/landingPage/PublicHeader";

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
