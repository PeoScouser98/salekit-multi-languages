import Link from '@/components/override/locale-link';
import { Box } from '@/components/ui';
import { useTranslations } from 'next-intl';
import tw from 'tailwind-styled-components';
import navigation from '../shared/navigation';

export default function NavLink() {
	const t = useTranslations('common_ns');

	return (
		<Nav as='nav'>
			{navigation.map((item) => (
				<NavLinkItem key={item.id} href={item.href}>
					{t(item.label)}
				</NavLinkItem>
			))}
		</Nav>
	);
}

const Nav = tw(Box)`flex items-center space-x-px sm:hidden md:hidden sticky top-0 z-50`;
const NavLinkItem = tw(
	Link
)`px-3 py-1.5 rounded-[4px] hover:bg-primary hover:text-white transition-color duration-200 font-medium`;
