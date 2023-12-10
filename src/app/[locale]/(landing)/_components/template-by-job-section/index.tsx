import { Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Card from './_components/card';
import Icon1 from '@/assets/images/1.png';
import Icon2 from '@/assets/images/2.png';
import Icon3 from '@/assets/images/3.png';
import Icon4 from '@/assets/images/4.png';
import Icon5 from '@/assets/images/5.png';
import Icon6 from '@/assets/images/6.png';
import Icon7 from '@/assets/images/7.png';
import Icon8 from '@/assets/images/8.png';
import Icon9 from '@/assets/images/9.png';
import Icon10 from '@/assets/images/10.png';
import Icon11 from '@/assets/images/11.png';
import Icon12 from '@/assets/images/12.png';

const jobs = [
	{ icon: Icon1, name: 'free_template_section.jobs.all' },
	{ icon: Icon2, name: 'free_template_section.jobs.online_sale' },
	{ icon: Icon3, name: 'free_template_section.jobs.foody_services' },
	{ icon: Icon4, name: 'free_template_section.jobs.office_products' },
	{ icon: Icon5, name: 'free_template_section.jobs.fashion' },
	{ icon: Icon6, name: 'free_template_section.jobs.blog' },
	{ icon: Icon7, name: 'free_template_section.jobs.comestic' },
	{ icon: Icon8, name: 'free_template_section.jobs.spa' },
	{ icon: Icon9, name: 'free_template_section.jobs.education' },
	{ icon: Icon10, name: 'free_template_section.jobs.furniture' },
	{ icon: Icon11, name: 'free_template_section.jobs.real_estate' },
	{ icon: Icon12, name: 'free_template_section.jobs.other' }
];

export default function TemplateByJobSection() {
	const t = useTranslations('landing_ns');

	return (
		<div className='mx-auto flex max-w-7xl flex-col gap-6 px-6'>
			<Typography variant='heading3' className='mx-auto max-w-4xl text-center text-primary'>
				{t('free_template_section.title2')}
			</Typography>
			<p className='text-center font-medium'>{t('free_template_section.description2')}</p>
			<div className='grid grid-cols-6 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{jobs.map((item, index) => (
					<Card key={index} icon={item.icon} name={t(item.name)} />
				))}
			</div>
		</div>
	);
}
