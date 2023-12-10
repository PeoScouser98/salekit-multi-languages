import Image, { StaticImageData } from 'next/image';

declare type TCardProps = {
	icon: React.ComponentProps<typeof Image>['src'];
	name: string;
};

export default function Card(props: TCardProps) {
	return (
		<div className='aspect-square w-full max-w-[16rem] rounded-lg p-3 shadow-[0_0_8px_#d1d5db]'>
			<div className='relative left-1/2 top-1/2 grid aspect-square h-[75%] -translate-x-1/2 -translate-y-1/2 grid-cols-1  gap-3'>
				<Image
					src={props.icon}
					alt='job'
					width={48}
					height={48}
					className='mx-auto aspect-square max-w-full self-center object-contain'
				/>
				<p className='text-center font-medium'>{props.name}</p>
			</div>
		</div>
	);
}
