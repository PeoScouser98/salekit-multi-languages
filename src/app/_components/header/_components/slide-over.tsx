'use client';

import Link from '@/components/override/locale-link';
import { Button } from '@/components/ui';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import navigation from '../shared/navigation';
import { useTranslations } from 'next-intl';

export default function SlideOver() {
	const [open, setOpen] = useState<boolean>(false);
	const t = useTranslations('common_ns');

	return (
		<>
			<Button
				variant='ghost'
				shape='circle'
				size='md'
				icon={Bars4Icon}
				className='hidden sm:inline-flex md:inline-flex'
				onClick={() => setOpen(!open)}
			/>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='ease-in-out duration-500'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in-out duration-500'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-hidden'>
						<div className='absolute inset-0 overflow-hidden'>
							<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
								<Transition.Child
									as={Fragment}
									enter='transform transition ease-in-out duration-500'
									enterFrom='translate-x-full'
									enterTo='translate-x-0'
									leave='transform transition ease-in-out duration-500'
									leaveFrom='translate-x-0'
									leaveTo='translate-x-full'>
									<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
										<div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
											<div className='px-4 sm:px-6'>
												<div className='flex items-start justify-end'>
													<div className='ml-3 flex h-7 items-center'>
														<Button
															size='sm'
															shape='circle'
															type='button'
															variant='ghost'
															role='button'
															onClick={() => setOpen(false)}>
															<span className='absolute -inset-2.5' />
															<span className='sr-only'>Close panel</span>
															<XMarkIcon className='h-6 w-6' aria-hidden='true' />
														</Button>
													</div>
												</div>
											</div>
											<div className='relative mt-6 flex-1 px-4 sm:px-6'>
												<Menu as='div' className='flex flex-col items-stretch gap-3 text-xl font-medium'>
													{navigation.map((item) => (
														<Menu.Item
															as={Link}
															passHref
															href={item.href}
															key={item.id}
															className='inline-flex items-center gap-6 rounded-lg px-3 py-2.5 ui-active:text-primary hover:bg-primary hover:text-white'>
															<item.icon className='h-6 w-6' />
															{t(item.label)}
														</Menu.Item>
													))}
												</Menu>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
