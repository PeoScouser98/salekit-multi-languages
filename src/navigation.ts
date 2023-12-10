import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES, LOCALE_PREFIX } from './constants/enums';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	locales: LOCALES,
	localePrefix: LOCALE_PREFIX
});
