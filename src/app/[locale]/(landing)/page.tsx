import AchievementSection from './_components/achievement-section';
import DevelopmentProcessSection from './_components/development-process-section';
import FeatureSection from './_components/features-section';
import FreeAppSection from './_components/free-app-section';
import InclusiveAppendixSection from './_components/inclusive-appendix-section';
import IntroHeroBanner from './_components/intro-section';
import OutstandingSection from './_components/outstanding-section';
import PricingSection from './_components/pricing-section';
import PromotionSection from './_components/promotion-section';
import QNASection from './_components/qna-section';
import TeamSection from './_components/team-section';
import TemplateByJobSection from './_components/template-by-job-section';
import TemplateStoreSection from './_components/template-store-section';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-stretch'>
			<IntroHeroBanner />
			<OutstandingSection />
			<FeatureSection />
			<InclusiveAppendixSection />
			<TeamSection />
			<DevelopmentProcessSection />
			<AchievementSection />
			<PricingSection />
			<FreeAppSection />
			<TemplateStoreSection />
			<TemplateByJobSection />
			<QNASection />
			<PromotionSection />
		</main>
	);
}
