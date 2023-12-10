'use client';

import LocaleLink from '@/components/override/locale-link';
import { Box } from '@/components/ui';
import Image from 'next/image';
import React from 'react';
import NavLink from './_components/nav-link';
import SlideOver from './_components/slide-over';
import LanguageSelect from './_components/language-select';
import Logo from '@/assets/images/logo.png';

const Header: React.FunctionComponent = () => {
	return (
		<Box as='header' className='mx-auto flex max-h-[60px] max-w-7xl items-center justify-between p-3'>
			<LocaleLink href='/'>
				<Image
					src={Logo}
					width={128}
					height={64}
					className='w-full max-w-[8rem] object-contain object-center'
					alt='logo'
				/>
			</LocaleLink>
			<Box className='flex items-center gap-6 sm:flex-row-reverse sm:gap-3'>
				<NavLink />
				<SlideOver />
				<LanguageSelect />
			</Box>
		</Box>
	);
};

export default Header;
