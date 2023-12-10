'use client';

import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'use-intl';
import PricingCard from './_components/card';
import PricingCollapse from './_components/pricing-collapse';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';

declare type TPackageType = 'basic' | 'advanced' | 'pro';
export declare type TPackage = {
	name: string;
	price: number;
	type: TPackageType;
	appendixes: Array<string>;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const packageList: Array<TPackage> = [
	{
		name: 'pricing_section.pack_1.title',
		type: 'basic',
		price: 5000000,
		appendixes: [
			'pricing_section.pack_1.appendix_1',
			'pricing_section.pack_1.appendix_2',
			'pricing_section.pack_1.appendix_3'
		]
	},
	{
		name: 'pricing_section.pack_2.title',
		type: 'advanced',
		price: 15000000,
		appendixes: [
			'pricing_section.pack_2.appendix_1',
			'pricing_section.pack_2.appendix_2',
			'pricing_section.pack_2.appendix_3'
		]
	},
	{
		name: 'pricing_section.pack_3.title',
		type: 'pro',
		price: 30000000,
		appendixes: [
			'pricing_section.pack_3.appendix_1',
			'pricing_section.pack_3.appendix_2',
			'pricing_section.pack_3.appendix_3'
		]
	}
];

export default function PricingSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box as='section' className='mx-auto mb-20 flex h-fit max-w-7xl flex-col overflow-hidden px-6 sm:px-3'>
			<Typography variant='heading3' as='h3' className='text-center text-primary sm:mb-10 md:mb-10'>
				{t('pricing_section.title')}
			</Typography>
			<Box className='mb-6 grid w-full grid-cols-3 gap-16 sm:hidden sm:grid-cols-1 md:hidden md:grid-cols-4'>
				{packageList.map((pack, index) => (
					<PricingCard key={index} data={pack} />
				))}
			</Box>
			<Menu as='div' className='mb-6 flex h-fit w-full flex-col gap-px overflow-hidden lg:hidden xl:hidden'>
				{packageList.map((pack, index) => (
					<PricingCollapse key={index} data={pack} />
				))}
			</Menu>
			<p className='mb-2 text-center'>{t('pricing_section.note_1')}</p>
			<p className='text-center'>{t('pricing_section.note_2', { fee: t('pricing_section.fee') })}</p>
		</Box>
	);
}
