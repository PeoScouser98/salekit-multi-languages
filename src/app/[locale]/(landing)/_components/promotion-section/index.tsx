'use client';

import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import PromotionList from './_components/promotion-list';
import PromotionRegistrationForm from './_components/promotion-registration-form';
import PromotionCountdown from './_components/promotion-countdown';

export default function PromotionSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box as='section' className='w-full bg-gradient-to-r from-primary to-primary-active px-6 py-20'>
			<Box className='mx-auto grid max-w-7xl grid-cols-[1fr_3fr] sm:grid-cols-1 sm:gap-10 md:grid-cols-1 md:gap-10 lg:gap-10'>
				<Box className='flex flex-col justify-between gap-6 sm:items-stretch sm:justify-start md:items-stretch md:justify-start'>
					<Typography
						variant='heading3'
						className='whitespace-nowrap uppercase text-white sm:whitespace-normal sm:text-center md:text-center'>
						{t('promotion_section.title').toUpperCase()} <span className='text-yellow-400'>SALEKIT</span>
					</Typography>
					<PromotionCountdown className='hidden sm:flex md:flex' />
					<PromotionList />
				</Box>
				<Box className='relative xl:-translate-x-10'>
					<PromotionCountdown className='absolute -left-2/3 right-10 top-1/2 w-full sm:hidden md:hidden lg:-left-[140%] lg:w-[768px]' />
					<PromotionRegistrationForm />
				</Box>
			</Box>
		</Box>
	);
}
