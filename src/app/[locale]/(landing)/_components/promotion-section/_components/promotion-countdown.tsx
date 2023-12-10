'use client';

/** eslint-disabled */

import { Box, Typography } from '@/components/ui';
import useCountdown from '@/hooks/use-countdown';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const today = new Date();
const promotionDayEnd = new Date(today);
promotionDayEnd.setDate(promotionDayEnd.getDate() + 3);

export default function PromotionCountdown(props: React.HTMLAttributes<HTMLDivElement>) {
	const {
		time: { days, hours, minutes, seconds },
		startCountdown
	} = useCountdown(promotionDayEnd);
	const t = useTranslations('common_ns');

	useEffect(() => {
		startCountdown();
	}, []);

	return (
		<Box
			className={cn(
				'flex w-fit items-center gap-6 rounded-[3rem] bg-gradient-to-r from-error via-secondary to-warning px-10 py-4  text-white sm:w-full sm:justify-center  sm:gap-4 md:w-full md:justify-center md:gap-10',
				props.className
			)}>
			<Box className='flex flex-col space-y-1'>
				<Typography variant='heading3'>{days.toString()}</Typography>
				<p className='basis-1/3'>{t('time.day')}</p>
			</Box>
			<Typography variant='heading3'>:</Typography>
			<Box className='flex flex-col space-y-1'>
				<Typography variant='heading3'>{hours.toString()}</Typography>
				<p className='basis-1/3'>{t('time.hour')}</p>
			</Box>
			<Typography variant='heading3'>:</Typography>
			<Box className='flex flex-col space-y-1'>
				<Typography variant='heading3'>{minutes.toString()}</Typography>
				<p className='basis-1/3'>{t('time.minute')}</p>
			</Box>
			<Typography variant='heading3'>:</Typography>
			<Box className='flex flex-col space-y-1'>
				<Typography variant='heading3'>{seconds.toString()}</Typography>
				<p className='basis-1/3'>{t('time.second')}</p>
			</Box>
		</Box>
	);
}
