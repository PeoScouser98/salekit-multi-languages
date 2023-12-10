'use client';

import English from '@/languages/en';
import Vietnamese from '@/languages/vi';
import buildProviders from '@/utils/build-provider';
import { NextIntlClientProvider, useLocale } from 'next-intl';

const AppProvider: React.FC<React.PropsWithChildren> = (props) => {
	const locale = useLocale();
	const language = (() => {
		switch (locale) {
			case 'vi':
				return Vietnamese;
			case 'en':
				return English;
		}
	})();

	const Providers = buildProviders([
		[NextIntlClientProvider, { locale: locale, messages: language, timeZone: 'Asia/Ho_Chi_Minh', now: new Date() }]
		// ... other providers (Redux provider, React query client provider, Theme prodvider...)
	]);

	return <Providers>{props.children}</Providers>;
};

export default AppProvider;
