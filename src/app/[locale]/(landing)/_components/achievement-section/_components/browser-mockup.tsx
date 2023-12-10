'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import tw from 'tailwind-styled-components';

declare type TBrowserMockupProps = {
	url: string;
} & React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement>;

const BrowserMockup: React.FC<TBrowserMockupProps> = (props) => {
	const { url, children, ...restProps } = props;

	return (
		<Browser {...restProps}>
			<BrowserToolbar>
				<BrowserActions>
					<div className='h-2.5 w-2.5 rounded-full bg-error' />
					<div className='h-2.5 w-2.5 rounded-full bg-warning' />
					<div className='h-2.5 w-2.5 rounded-full bg-success' />
				</BrowserActions>
				<BrowserSearch>
					<MagnifyingGlassIcon className='absolute left-2 top-1/2 z-0 h-3 w-3 -translate-y-1/2' />
					<div className='pointer-events-none select-none text-ellipsis whitespace-nowrap rounded-md border border-gray-200 py-1 pl-8 pr-1 text-xs'>
						{url}
					</div>
				</BrowserSearch>
			</BrowserToolbar>
			<BrowserContent>{children}</BrowserContent>
		</Browser>
	);
};

const Browser = tw.div`flex flex-col rounded-lg border border-gray-200 overflow-clip relative z-0`;
const BrowserToolbar = tw.div`flex justify-center items-center p-2 bg-gray-100 relative`;
const BrowserActions = tw.div`absolute top-1/2 -translate-y-1/2 left-3 flex items-center gap-2`;
const BrowserSearch = tw.div`relative self-center`;
const BrowserContent = tw.div`max-w-full mx-auto place-content-center h-fit`;

export default BrowserMockup;
