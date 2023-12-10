'use client';

import Link from '@/components/override/locale-link';
import { Box } from '@/components/ui';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { type TQnAItem } from '..';

export default function CollapseItem({ data }: { data: TQnAItem }) {
	const t = useTranslations();

	return (
		<Disclosure
			as={'div'}
			className='overflow-hidden rounded-lg border border-l-4 border-gray-200 border-l-primary outline-none'>
			<>
				<Disclosure.Button className='z-10 flex w-full flex-grow items-center justify-between border-none p-6 text-left text-gray-800 outline-none focus:border-none sm:px-3'>
					<p className='flex-1 font-semibold'>{t(data.question)}</p>
					<ChevronDownIcon className='h-4 w-4 basis-1/12 transform font-medium text-base-content duration-300 ease-in-out ui-open:-rotate-180' />
				</Disclosure.Button>
				<Transition
					className='-translate-y-2 overflow-hidden'
					enter='transition-max-height duration-300 ease'
					enterFrom='max-h-0'
					enterTo='max-h-full'
					leave='transition-max-height duration-300 ease'
					leaveFrom='max-h-full'
					leaveTo='max-h-0'>
					<Disclosure.Panel static>
						<Box className='px-6 py-3'>
							<p className='mb-6 text-sm'>{t(data.answer)}</p>
							<Link href={data.link.href} className='text-sm text-primary hover:underline'>
								{t(data.link.text)}
							</Link>
						</Box>
					</Disclosure.Panel>
				</Transition>
			</>
		</Disclosure>
	);
}
