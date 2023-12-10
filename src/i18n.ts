import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./languages/${locale}`)).default,
	timeZone: 'Asia/Ho_Chi_Minh',
	now: new Date()
}));
