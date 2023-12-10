'use client';

import { Box } from '@/components/ui';
import tw from 'tailwind-styled-components';

export default function AppendixItem({ appendix, index }: { appendix: string; index: number }) {
	return (
		<Box className='relative flex h-20 items-center rounded-md p-3 shadow-[0_0_8px_#d1d5db]'>
			<Badge>{index}</Badge>
			<p className='pl-6 text-sm'>{appendix}</p>
		</Box>
	);
}

const Badge = tw.div`inline-flex text-sm items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-medium absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4`;
