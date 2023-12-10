import { Link } from '@/navigation';
import { useLocale, type Locale } from 'next-intl';

declare type TLinkProps = React.ComponentProps<typeof Link>;

const LocaleLink: React.FC<TLinkProps> = ({ children, ...props }) => {
	const locale = useLocale() as Locale;

	return (
		<Link {...props} locale={locale}>
			{children}
		</Link>
	);
};

export default LocaleLink;
