import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: '404 - Page could not be found'
};
export default function NotFoundPage() {
	notFound();
}
