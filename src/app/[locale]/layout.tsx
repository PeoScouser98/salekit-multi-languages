import '@/styles/globals.css';
import AppProvider from '@/components/providers/app-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../_components/header';
import { LOCALES } from '@/constants/enums';
import { notFound } from 'next/navigation';
import { cn } from '@/utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Salekit',
	description: 'Giải pháp thiết kế website chuyên nghiệp'
};

declare type TRootLayoutProps = {
	params: { locale: (typeof LOCALES)[number] };
} & React.PropsWithChildren;

const RootLayout: React.FC<TRootLayoutProps> = ({ children, params }) => {
	if (!LOCALES.includes(params.locale)) notFound();

	return (
		<html lang={params.locale}>
			<AppProvider>
				<body
					className={cn(
						inter.className,
						'text-base-content scroll-smooth scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300'
					)}>
					<Header />
					{children}
				</body>
			</AppProvider>
		</html>
	);
};

export default RootLayout;
