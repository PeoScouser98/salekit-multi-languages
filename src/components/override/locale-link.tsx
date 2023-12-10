'use client';

import { Link } from '@/navigation';
import { useLocale, type Locale } from 'next-intl';
import { MutableRefObject, forwardRef, useRef } from 'react';

declare type TLinkProps = React.ComponentProps<typeof Link>;

export default forwardRef(({ children, prefetch, ...props }: TLinkProps, ref) => {
	const locale = useLocale() as Locale;
	const localRef = useRef(null);
	const resolvedRef = ref || localRef;

	return (
		<Link {...props} locale={locale} prefetch={prefetch || false} ref={resolvedRef as MutableRefObject<any>}>
			{children}
		</Link>
	);
});
