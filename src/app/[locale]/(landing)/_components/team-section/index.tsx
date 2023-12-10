'use client';

import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import DeveloperIcon from '@/assets/svgs/team-developer.svg';
import DesignerIcon from '@/assets/svgs/team-designer.svg';
import WriterIcon from '@/assets/svgs/team-writer.svg';
import SalerIcon from '@/assets/svgs/team-saler.svg';
import PageImage from '@/assets/images/page.png';
import Image from 'next/image';
import { PhotoIcon } from '@heroicons/react/20/solid';
import TeamImage from '@/assets/images/team-image.avif';

const teams = [
	{ name: 'Developer', icon: DeveloperIcon },
	{ name: 'Designer', icon: DesignerIcon },
	{ name: 'Content Writer', icon: WriterIcon },
	{ name: 'SEOer', icon: SalerIcon }
];
export default function TeamSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box className='w-full py-20'>
			<Box as='section' className='relative mx-auto mb-20 flex w-full max-w-7xl items-center justify-center px-6'>
				{/* Background */}
				<Box className='absolute inset-0 z-0 mx-auto w-[90%]'>
					<Box
						className='relative z-10 h-32 w-full rounded-lg bg-gradient-to-r from-emerald-200 to-primary sm:h-36'
						style={{ transform: 'perspective(6rem) rotateX(-4deg)' }}
					/>
					<Box
						className='relative bottom-10 z-0 h-32 w-full rounded-lg bg-gray-100 sm:h-32'
						style={{ transform: 'perspective(10rem) rotateX(8deg)' }}
					/>
				</Box>
				{/* Team section */}
				<Box className='relative inset-0 z-10 flex flex-col items-center gap-6 py-3'>
					<Typography variant='heading6' className='text-center text-white'>
						{t('team_section.title')}
					</Typography>
					<Box className='relative grid grid-cols-4 items-stretch gap-x-10 sm:gap-x-4'>
						{teams.map((team, index) => (
							<Box className='flex flex-col items-center space-y-1' key={index}>
								<Box className='flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 shadow-xl ring-primary sm:h-16 sm:w-16 '>
									<Image
										src={team.icon}
										alt={team.name}
										width={64}
										height={64}
										className='max-w-[4rem] object-contain sm:max-w-[3rem]'
									/>
								</Box>
								<p className='whitespace-nowrap font-medium sm:text-xs'>{team.name}</p>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<Box className='mx-auto flex aspect-[16/9] max-h-96 max-w-7xl items-center justify-center rounded-md bg-gray-200'>
				<PhotoIcon className='h-32 w-32 text-disabled/50' />
			</Box>
		</Box>
	);
}
