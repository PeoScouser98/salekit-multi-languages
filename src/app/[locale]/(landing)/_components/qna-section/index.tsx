'use client';

import LocaleLink from '@/components/override/locale-link';
import { Menu } from '@headlessui/react';
import CollapseItem from './_components/collapse-item';
import { Box } from '@/components/ui';
import Image from 'next/image';
import QnAImage from '@/assets/images/qna-image.avif';
import { PhotoIcon } from '@heroicons/react/20/solid';

export declare type TQnAItem = {
	question: string;
	answer: string;
	link: { href: React.ComponentProps<typeof LocaleLink>['href']; text: string };
};

const commonQNA: Array<TQnAItem> = [
	{
		question: 'landing_ns.qna_section.question_1',
		answer: 'landing_ns.qna_section.answer_1',
		link: { href: '#', text: 'common_ns.actions.details' }
	},
	{
		question: 'landing_ns.qna_section.question_2',
		answer: 'landing_ns.qna_section.answer_2',
		link: { href: '#', text: 'common_ns.actions.details' }
	},
	{
		question: 'landing_ns.qna_section.question_3',
		answer: 'landing_ns.qna_section.answer_3',
		link: { href: '#', text: 'common_ns.actions.details' }
	},
	{
		question: 'landing_ns.qna_section.question_4',
		answer: 'landing_ns.qna_section.answer_4',
		link: { href: '#', text: 'common_ns.actions.details' }
	},
	{
		question: 'landing_ns.qna_section.question_5',
		answer: 'landing_ns.qna_section.answer_5',
		link: { href: '#', text: 'common_ns.actions.details' }
	}
];

export default function QNASection() {
	return (
		<Box className='mx-auto grid w-full  max-w-7xl grid-cols-2 items-start gap-20 px-6 py-20 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
			<Menu as='div' className='flex flex-col gap-2 overflow-hidden'>
				{commonQNA.map((item, index) => (
					<CollapseItem key={index} data={item} />
				))}
			</Menu>
			<Box className='mx-auto flex aspect-[16/9] w-full max-w-full items-center justify-center rounded-md bg-gray-200'>
				<PhotoIcon className='h-32 w-32 text-disabled/50' />
			</Box>
		</Box>
	);
}
