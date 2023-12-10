'use client';

import { Box, Typography } from '@/components/ui';
import Image from 'next/image';
import AchievementBannerImage from '@/assets/images/banner-achievement.png';

import { useTranslations } from 'next-intl';
import BarChartIcon from '@/assets/svgs/bar-chart-icon.svg';
import AreaChartIcon from '@/assets/svgs/area-chart-icon.svg';
import LineChartIcon from '@/assets/svgs/line-chart-icon.svg';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import BrowserMockup from './_components/browser-mockup';
import { ChartCard, GradientCard, Rating } from './_components/cards';
export default function AchievementSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box as='section' className='from to relative mb-20 bg-gradient-to-b from-primary-active to-primary xl:bg-none'>
			<Image
				src={AchievementBannerImage}
				placeholder='blur'
				alt='achivement'
				className='absolute inset-0 z-0 hidden max-h-screen max-w-full object-cover object-bottom xl:block xxl:h-[90vh]'
			/>
			<Box className='relative z-10 px-6 py-10 sm:px-3'>
				<Typography as='h3' variant='heading3' className='mb-10 text-center text-white'>
					{t('achievement_section.title')}
				</Typography>

				<BrowserMockup
					url='https://salekit.com'
					className='absolute bottom-16 left-1/2 z-0 hidden w-full -translate-x-1/3 border-none bg-gradient-to-b from-white to-transparent lg:block lg:max-w-[400px] lg:-translate-x-1/2 xl:block xl:max-w-[600px] xxl:max-w-[700px]'>
					<Box className='min-h-[20rem] w-[inherit]' />
				</BrowserMockup>

				<Box className='relative z-10 flex flex-row-reverse items-stretch gap-6 sm:flex-col-reverse md:flex-col-reverse'>
					<Box className='grid grid-cols-1 gap-3 sm:w-full sm:grid-cols-2 md:w-full md:grid-cols-2'>
						<ChartCard
							chart={BarChartIcon}
							stats='+300%'
							title={t('achievement_section.stats_4.title')}
							description={t('achievement_section.stats_4.description')}
						/>
						<ChartCard
							chart={AreaChartIcon}
							icon={UserCircleIcon}
							stats='-50%'
							title={t('achievement_section.stats_7.title')}
							description={t('achievement_section.stats_7.description')}
							className='hidden sm:flex md:flex'
						/>
						<ChartCard chart={LineChartIcon} stats='+220%' title={t('achievement_section.stats_5')} />
						<ChartCard description={t('achievement_section.stats_6')}>
							<Rating />
						</ChartCard>
					</Box>

					<Box className='flex flex-col items-end justify-between gap-3'>
						<Box className='relative z-10 grid w-full grid-cols-3 items-stretch justify-end gap-3 sm:grid-cols-1'>
							<GradientCard title='200%' description={t('achievement_section.stats_1')} />
							<GradientCard title='10.000+' description={t('achievement_section.stats_2')} />
							<GradientCard
								title={t('achievement_section.stats_3.title')}
								description={t('achievement_section.stats_3.description')}
							/>
						</Box>
						<ChartCard
							chart={AreaChartIcon}
							icon={UserCircleIcon}
							stats='-50%'
							title={t('achievement_section.stats_7.title')}
							description={t('achievement_section.stats_7.description')}
							className='sm:hidden md:hidden'
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
