import { useLocale } from 'next-intl';
import { LOCALES } from '../constants/enums';

module 'next-intl' {
	declare type Locale = (typeof LOCALES)[number];
}
