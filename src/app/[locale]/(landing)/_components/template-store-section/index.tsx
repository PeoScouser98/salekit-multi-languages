'use client';

import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Image1 from '@/assets/images/salekit-1.jpg';
import Image2 from '@/assets/images/salekit-2.jpg';
import Image3 from '@/assets/images/salekit-3.jpg';
import Image4 from '@/assets/images/salekit-4.png';
import Image from 'next/image';

export default function TemplateStoreSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box className='mx-auto max-w-7xl px-6 py-20 sm:px-3'>
			<Typography variant='heading3' className='mb-6 text-center text-primary'>
				{t('free_template_section.title1')}
			</Typography>
			<p className='mb-10 text-center'>{t('free_template_section.description1')}</p>
			<Box className='grid grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-2'>
				<Image
					src={Image1}
					alt='salekit'
					width={320}
					height={640}
					className='h-[480px] max-w-full object-cover object-top'
				/>
				<Image
					src={Image2}
					alt='salekit'
					width={320}
					height={640}
					className='h-[480px] max-w-full object-cover object-top'
				/>
				<Image
					src={Image3}
					alt='salekit'
					width={320}
					height={640}
					className='h-[480px] max-w-full object-cover object-top'
				/>
				<Image
					src={Image4}
					alt='salekit'
					width={320}
					height={640}
					className='h-[480px] max-w-full object-cover object-top'
				/>
			</Box>
		</Box>
	);
}
