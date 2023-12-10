import LocaleLink from '@/components/override/locale-link';
import { HomeIcon } from '@heroicons/react/20/solid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 - Page Not found'
};
export default function NotFoundPage() {
	return (
		<main className='h-[calc(100vh-60px)] flex items-center justify-center text-base-content'>
			<div className='flex flex-col gap-6 items-center'>
			<h1 className='text-6xl font-bold text-error'>404</h1>
			<h2 className='text-4xl font-bold'>Page Could Not Be Found</h2>
			<p>Could not find requested resource</p>
			<LocaleLink href='/' className='btn btn-md btn-primary'><HomeIcon className='w-5 h-5'/>Return Home</LocaleLink>
			</div>
		</main>
	);
}
