'use client';

import { Box, Typography } from '@/components/ui';
import { cn } from '@/utils/cn';
import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

declare interface ICardProps extends React.AllHTMLAttributes<HTMLDivElement> {
	title?: string;
	description?: string;
}

declare interface IChartCardProps extends ICardProps, React.PropsWithChildren {
	icon?: React.ElementType;
	stats?: string;
	chart?: string;
}

export const GradientCard: React.FC<ICardProps> = (props) => {
	return (
		<Box className='flex max-w-xs flex-col gap-4 rounded-lg bg-gradient-to-b from-white to-transparent p-3'>
			<Typography variant='heading6' className='text-primary'>
				{props.title}
			</Typography>
			<p>{props.description}</p>
		</Box>
	);
};

export const ChartCard: React.FC<IChartCardProps> = (props) => {
	return (
		<Box
			className={cn(
				'flex max-w-sm flex-col gap-3 rounded-lg border-[2px] border-cyan-400 bg-primary p-3',
				props.className
			)}>
			{props.title && (
				<Typography variant='heading6' as='h6' className='inline-flex items-center gap-2 text-cyan-400'>
					{props.icon && <props.icon className='h-6 w-6' />} {props.title}
				</Typography>
			)}
			{props.stats && (
				<Typography variant='heading4' as='div' className='text-white'>
					{props.stats}
				</Typography>
			)}
			{props.chart && <Image src={props.chart} alt='chart' width={100} height={50} className='opacity-50' />}
			{props.description && (
				<Box className='inline-flex gap-3 text-sm text-white'>
					{props.description} {props.children}
				</Box>
			)}
		</Box>
	);
};

export const Rating: React.FunctionComponent = () => (
	<Box className='flex items-center gap-1'>
		<StarIcon className='h-4 w-4 text-yellow-400' />
		<StarIcon className='h-4 w-4 text-yellow-400' />
		<StarIcon className='h-4 w-4 text-yellow-400' />
		<StarIcon className='h-4 w-4 text-yellow-400' />
		<StarIcon className='h-4 w-4 text-yellow-400' />
	</Box>
);
