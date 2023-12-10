'use client';

import { Tab } from '@headlessui/react';
import { Box, Typography } from '@/components/ui';
import { useTranslations } from 'next-intl';
import tw from 'tailwind-styled-components';
import { ChartBarIcon, Cog8ToothIcon, ComputerDesktopIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import BackgroundImage from '@/assets/images/banner-feature.jpg';
import TemplateFeaturePanel from './_components/TemplateFeaturePanel';

const tabs = [
	{
		title: 'features_section.main_feature_1',
		icon: ComputerDesktopIcon,
		disabled: false,
		panel: <TemplateFeaturePanel />
	},
	{
		title: 'features_section.main_feature_2',
		icon: RocketLaunchIcon,
		disabled: false,
		panel: <TemplateFeaturePanel />
	},
	{ title: 'features_section.main_feature_3', icon: Cog8ToothIcon, disabled: false, panel: <TemplateFeaturePanel /> },
	{ title: 'features_section.main_feature_4', icon: ChartBarIcon, disabled: false, panel: <TemplateFeaturePanel /> }
];

export default function FeatureSection() {
	const t = useTranslations('landing_ns');
	return (
		<Box
			as='section'
			className='flex flex-col space-y-10 px-6 py-20 xl:px-0'
			style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
			<Typography variant='heading4' className='text-center text-white'>
				{t('features_section.title')}
			</Typography>
			<Tab.Group>
				<Tab.List className='mx-auto grid w-full max-w-7xl grid-cols-4 gap-6 overflow-x-auto scrollbar-none sm:grid-cols-1 sm:gap-3 md:grid-cols-2'>
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							disabled={tab.disabled}
							className='flex items-center justify-center gap-x-3 whitespace-nowrap rounded-md border border-white p-4 font-medium text-white ui-selected:bg-white ui-selected:text-base-content focus:outline-none'>
							<tab.icon className='h-5 w-5' />
							{t(tab.title)}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels>
					{tabs.map((tab) => (
						<Tab.Panel className='mx-auto w-full max-w-7xl'>{tab.panel}</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</Box>
	);
}

const StyledTab = tw(Tab)``;
