import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';

const promotionList = [
	'promotion_section.promotion_list.seo_course',
	'promotion_section.promotion_list.google_ads_course',
	'promotion_section.promotion_list.ai_support'
];

export default function PromotionList() {
	const t = useTranslations('landing_ns');

	return (
		<ul className='flex flex-col gap-y-3'>
			{promotionList.map((item, index) => (
				<li key={index} className='flex flex-grow justify-start space-x-2 text-white sm:text-sm'>
					<CheckBadgeIcon className='h-5 w-5 basis-[3rem] text-white' />
					{t(item)}
				</li>
			))}
		</ul>
	);
}
