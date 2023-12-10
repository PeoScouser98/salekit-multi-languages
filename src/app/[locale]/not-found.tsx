import Link from '@/components/override/locale-link';
import { HomeIcon } from '@heroicons/react/20/solid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 - Page Not found'
};
export default function NotFoundPage() {
	return (
		<main className='flex h-[calc(100vh-60px)] items-center justify-center text-base-content'>
			<div className='flex flex-col items-center gap-6'>
				<h1 className='text-6xl font-bold text-error'>404</h1>
				<h2 className='text-4xl font-bold'>Page Could Not Be Found</h2>
				<p>Could not find requested resource</p>
				<Link href='/' className='btn btn-md btn-primary'>
					<HomeIcon className='h-5 w-5' />
					Return Home
				</Link>
			</div>
		</main>
	);
}
