import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { TPackage } from '..';
import { Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';

export default function PricingCollapse({ data }: { data: TPackage }) {
	const t = useTranslations('landing_ns');

	return (
		<Disclosure as={Menu.Item} className='overflow-hidden rounded-md outline-none'>
			<>
				<Disclosure.Button className='z-10 flex w-full items-center justify-between border-none px-3 py-6 text-gray-800 outline-none ui-open:bg-gray-50 hover:bg-gray-50 focus:border-none sm:w-full'>
					<Typography variant='heading6'>{t(data.name)}</Typography>
					<ChevronRightIcon className='h-6 w-6 transform font-medium text-base-content duration-300 ease-in-out ui-open:rotate-90' />
				</Disclosure.Button>
				<Transition
					className='-translate-y-px overflow-hidden bg-gray-50'
					enter='transition-max-height duration-300 ease-in'
					enterFrom='max-h-0'
					enterTo='max-h-full'
					leave='transition-max-height duration-300 ease-out'
					leaveFrom='max-h-none'
					leaveTo='max-h-0'>
					<Disclosure.Panel static>
						{data.appendixes.map((item: any, index: number) => {
							return (
								<Menu.Item
									as='div'
									key={index}
									className='grid grid-cols-[10%_90%] items-center rounded-sm border-none p-3 outline-none transition-all duration-200 ease-in-out hover:bg-gray-200 focus:border-none md:grid-cols-[5%_95%]'>
									<CheckBadgeIcon className='h-6 w-6 text-success' /> {t(item)}
								</Menu.Item>
							);
						})}
					</Disclosure.Panel>
				</Transition>
			</>
		</Disclosure>
	);
}
