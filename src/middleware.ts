import { LOCALES, LOCALE_PREFIX } from '@/constants/enums';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: LOCALES,
	localePrefix: LOCALE_PREFIX,
	defaultLocale: LOCALES[0]
});

export const config = {
	// * Match only internationalized pathnames
	matcher: ['/', '/(vi|en)/:path*']
};
