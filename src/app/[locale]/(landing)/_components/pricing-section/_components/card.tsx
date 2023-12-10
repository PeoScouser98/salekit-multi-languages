'use client';

import { Box, Typography } from '@/components/ui';
import { cn } from '@/utils/cn';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';
import tw from 'tailwind-styled-components';
import { TPackage } from '..';

export default function PricingCard({ data }: { data: TPackage }) {
	const t = useTranslations('landing_ns');

	const background = {
		'bg-success': data.type === 'basic',
		'bg-primary': data.type === 'advanced',
		'bg-warning': data.type === 'pro'
	};
	const color = {
		'text-success': data.type === 'basic',
		'text-primary': data.type === 'advanced',
		'text-warning': data.type === 'pro'
	};

	return (
		<Box className='relative mx-auto my-20 w-full max-w-sm'>
			<Box
				className={cn(
					'absolute left-1/2 top-1/2 mx-auto min-h-[300px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-2xl lg:w-[310px]',
					background
				)}
			/>
			<Box className='relative inset-0 z-10 flex h-full w-full max-w-xs flex-col gap-6 overflow-clip rounded-2xl bg-white shadow-[0_0_8px_#d1d5db] lg:max-w-[300px]'>
				<Box className={cn('mx-auto w-full rounded-[0_0_3rem_3rem] px-6 py-4', background)}>
					<Typography variant='heading6' className='text-center text-white'>
						{t(data.name)}
					</Typography>
				</Box>
				<Box className='flex flex-col gap-3 p-6'>
					<Typography className={cn('text-center', color)} variant='heading3'>
						{data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
					</Typography>
					<Divider className={cn(background)} />
					<List>
						{data.appendixes.map((item, index) => (
							<ListItem key={index}>
								<CheckBadgeIcon className={cn('h-5 w-5 basis-[10%]', color)} />
								<span className='pl-3'>{t(item)}</span>
							</ListItem>
						))}
					</List>
				</Box>
			</Box>
		</Box>
	);
}

const Divider = tw.div`h-[2px] w-full`;
const List = tw.ul`flex flex-col gap-3`;
const ListItem = tw.li`grid grid-cols-[10%_90%]`;
