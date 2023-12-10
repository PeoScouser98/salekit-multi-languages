'use client';

import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'use-intl';
import tw from 'tailwind-styled-components';
import OutstandingIcon1 from '@/assets/svgs/outstanding-1.svg';
import OutstandingIcon2 from '@/assets/svgs/outstanding-2.svg';
import OutstandingIcon3 from '@/assets/svgs/outstanding-3.svg';
import OutstandingIcon4 from '@/assets/svgs/outstanding-4.svg';
import Image from 'next/image';

const outstandings = [
	{
		label: 'outstanding_section.outstanding_1',
		icon: OutstandingIcon1
	},
	{ label: 'outstanding_section.outstanding_2', icon: OutstandingIcon2 },
	{ label: 'outstanding_section.outstanding_3', icon: OutstandingIcon3 },
	{ label: 'outstanding_section.outstanding_4', icon: OutstandingIcon4 }
];

export default function OutstandingSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box as='section' className='mx-auto flex max-w-7xl flex-col gap-y-6 px-6 py-20'>
			<Typography variant='heading3' as='h3' className='text-center text-primary'>
				{t('outstanding_section.title')}
			</Typography>
			<Paragraph>{t('outstanding_section.description')}</Paragraph>
			<Grid>
				{outstandings.map((item, index) => (
					<GridItem key={index}>
						<Image src={item.icon} alt='outstanding' width={96} height={96} />
						{t(item.label)}
					</GridItem>
				))}
			</Grid>
		</Box>
	);
}

const Paragraph = tw.p`text-center mb-20 max-w-4xl mx-auto`;
const Grid = tw(Box)`grid sm:grid-cols-2 md:grid-cols-2 grid-cols-4 gap-6`;
const GridItem = tw(
	Box
)`flex flex-col items-center gap-6 shadow-[0px_0px_6px_#d1d5db] p-6 sm:p-3 text-center rounded-md`;
