'use client';

import { Box, Button, Typography } from '@/components/ui';
import Image from 'next/image';
import BannerVectorImage from '@/assets/images/banner-home-vector.png';
import BannerHomeImage from '@/assets/images/banner-home-image.png';
import { useTranslations } from 'next-intl';
import tw from 'tailwind-styled-components';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
export default function IntroHeroBanner() {
	const t = useTranslations();

	return (
		<Box
			as='section'
			className='relative flex h-fit items-center justify-center py-20 sm:h-screen xl:h-[calc(100vh-60px)]'>
			<Box className='h-inherit absolute inset-0 z-0 bg-gradient-to-br from-blue-500 to-blue-800'>
				<Image
					src={BannerVectorImage}
					alt='banner-vector'
					className='h-full w-full object-cover'
					placeholder='blur'
				/>
			</Box>
			<Box className='relative mx-auto flex max-w-7xl flex-col items-center gap-10 p-6 sm:flex-col-reverse md:flex-col-reverse lg:flex-row lg:gap-6 xl:flex-row xl:p-0'>
				<Box className='flex max-w-lg flex-col gap-6 sm:gap-3 md:gap-4'>
					<Typography as='h3' variant='heading3' className=' font-medium text-white'>
						{t('landing_ns.intro_section.title')}
					</Typography>
					<Typography as='h3' variant='heading3' className=' text-yellow-400 xl:whitespace-nowrap'>
						{t('landing_ns.intro_section.sub_title')}
					</Typography>
					<Paragraph>{t('landing_ns.intro_section.description')}</Paragraph>
					<Paragraph>Website | Affiliate | Landing Page | Chatbot</Paragraph>
					<Box className='mt-6'>
						<Button
							size='lg'
							shape='pill'
							text={t('common_ns.actions.free_trial')}
							className='w-full bg-gradient-to-r from-error via-secondary-active to-secondary px-6'
							icon={ArrowRightCircleIcon}
							rtl
						/>
					</Box>
				</Box>
				<Image
					src={BannerHomeImage}
					alt='banner-home-image'
					className='max-w-3xl object-cover object-center sm:max-w-full md:max-w-md lg:max-w-lg'
					placeholder='empty'
				/>
			</Box>
		</Box>
	);
}

const Paragraph = tw.p`text-white text-lg sm:text-base`;
