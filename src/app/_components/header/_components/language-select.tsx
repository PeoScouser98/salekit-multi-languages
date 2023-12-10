import UKFlagIcon from '@/assets/svgs/en.svg';
import VNFlagIcon from '@/assets/svgs/vn.svg';
import { Box } from '@/components/ui';
import { usePathname, useRouter } from '@/navigation';
import { cn } from '@/utils/cn';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Fragment, useTransition } from 'react';
import tw from 'tailwind-styled-components';

const options = [
	{ label: 'Tiếng Việt', value: 'vi', icon: VNFlagIcon },
	{ label: 'English', value: 'en', icon: UKFlagIcon }
];
export default function LanguageSelect() {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();

	const handleChangeLanguage = (value: string) => {
		startTransition(() => {
			router.replace(pathname, { locale: value });
		});
	};
	return (
		<Box className='inline-flex items-center gap-px'>
			<Image width={18} height={8} src={locale === 'vi' ? VNFlagIcon : UKFlagIcon} alt='language' />
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
						{locale.toUpperCase()}
						<ChevronDownIcon className='-mr-1 ml-2 h-5 w-5 text-base-content' aria-hidden='true' />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'>
					<Menu.Items className='absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
						<div className='px-1 py-1 '>
							{options.map((option) => (
								<Menu.Item key={option.value}>
									<button
										onClick={() => handleChangeLanguage(option.value)}
										className={cn(
											'group inline-grid w-full grid-cols-[10%_90%] items-center gap-x-2 rounded-md px-2 py-2 text-sm ui-active:bg-primary ui-active:text-white '
										)}>
										<ActiveDot
											className={cn('bg-base-content ui-active:bg-white', {
												invisible: locale !== option.value
											})}
										/>
										<span className='whitespace-nowrap text-left' aria-readonly='true'>
											{option.label}
										</span>
									</button>
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</Box>
	);
}

const ActiveDot = tw.span`w-1.5 h-1.5 rounded-full`;
