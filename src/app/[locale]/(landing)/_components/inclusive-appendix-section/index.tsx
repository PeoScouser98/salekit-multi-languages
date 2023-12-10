'use client';

import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import tw from 'tailwind-styled-components';
import AppendixItem from './_components/appendix-item';

const appendixes = [
	'inclusive_appendix_section.appendix_1',
	'inclusive_appendix_section.appendix_2',
	'inclusive_appendix_section.appendix_3',
	'inclusive_appendix_section.appendix_4',
	'inclusive_appendix_section.appendix_5',
	'inclusive_appendix_section.appendix_6',
	'inclusive_appendix_section.appendix_7',
	'inclusive_appendix_section.appendix_8',
	'inclusive_appendix_section.appendix_9',
	'inclusive_appendix_section.appendix_10',
	'inclusive_appendix_section.appendix_11',
	'inclusive_appendix_section.appendix_12',
	'inclusive_appendix_section.appendix_13',
	'inclusive_appendix_section.appendix_14',
	'inclusive_appendix_section.appendix_15',
	'inclusive_appendix_section.appendix_16'
];

export default function InclusiveAppendixSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box className='max-w-full bg-gray-50 px-6 py-20'>
			<Box as='section' className='mx-auto flex max-w-7xl flex-col items-center gap-y-6 '>
				<Typography variant='heading4' className='text-center text-primary'>
					{t('inclusive_appendix_section.title')}
				</Typography>
				<Paragraph>{t('inclusive_appendix_section.description')}</Paragraph>
				<Grid>
					{appendixes.map((appendix, index) => (
						<AppendixItem key={index} index={index + 1} appendix={t(appendix)} />
					))}
				</Grid>
			</Box>
		</Box>
	);
}

const Paragraph = tw.p`text-center max-w-3xl`;
const Grid = tw.div`max-w-full mx-auto grid grid-rows-[repeat(8,_minmax(0,_1fr))] sm:grid-cols-1 md:grid-cols-1 gap-x-10 gap-y-6 items-stretch  lg:grid-flow-col xl:grid-flow-col`;
