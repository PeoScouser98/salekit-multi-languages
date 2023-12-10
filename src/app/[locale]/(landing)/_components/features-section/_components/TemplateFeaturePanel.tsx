'use client';

import { Box, Typography } from '@/components/ui';
import tw from 'tailwind-styled-components';
import Feature1Icon from '@/assets/svgs/feat-1.svg';
import Feature2Icon from '@/assets/svgs/feat-2.svg';
import Feature3Icon from '@/assets/svgs/feat-3.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import BannerHomeImage from '@/assets/images/banner-home-image.png';

const features = [
	{
		icon: Feature1Icon,
		title: 'features_section.side_feature_1.title',
		description: 'features_section.side_feature_1.description'
	},
	{
		icon: Feature2Icon,
		title: 'features_section.side_feature_2.title',
		description: 'features_section.side_feature_2.description'
	},
	{
		icon: Feature3Icon,
		title: 'features_section.side_feature_3.title',
		description: 'features_section.side_feature_3.description'
	}
];

export default function TemplateFeaturePanel() {
	const t = useTranslations('landing_ns');

	return (
		<Box className='mx-auto flex max-w-full gap-10 sm:flex-col-reverse md:flex-col-reverse'>
			<List>
				{features.map((item, index) => (
					<ListItem key={index}>
						<Image
							src={item.icon}
							alt='feature'
							className='max-w-[6rem] basis-[10%] self-center sm:max-w-[3rem] sm:self-start'
						/>
						<Box className='flex w-full flex-col space-y-3 sm:space-y-1'>
							<Typography variant='heading6' className='text-white'>
								{t(item.title)}
							</Typography>
							<Paragraph>{t(item.description)}</Paragraph>
						</Box>
					</ListItem>
				))}
			</List>
			<Image src={BannerHomeImage} alt='' className='max-w-xl object-contain sm:max-w-full' />
		</Box>
	);
}

const List = tw.ul`flex flex-col gap-y-10 basis-1/2 w-full`;
const ListItem = tw.li`flex gap-x-6 sm:gap-x-3 w-full`;
const Paragraph = tw.span`text-white text-sm`;
