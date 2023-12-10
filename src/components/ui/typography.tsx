'use client'

import { cn } from '@/utils/cn';
import { useMemo } from 'react';

declare type TTypographyProps = {
	as?: React.ElementType;
	variant?: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';
} & React.HTMLAttributes<HTMLElement> &
	React.PropsWithChildren;

export const Typography: React.FC<TTypographyProps> = (props) => {
	const { as = 'div', className, children, variant, ...restProps } = props;

	const Element = useMemo(() => {
		if (as) return as;
		switch (variant) {
			case 'heading1':
				return 'h1';
			case 'heading2':
				return 'h2';
			case 'heading3':
				return 'h1';
			case 'heading4':
				return 'h4';
			case 'heading4':
				return 'h5';
			case 'heading4':
				return 'h6';
			default:
				return as;
		}
	}, [variant, as]);

	const classnames = cn(
		{
			'text-6xl md:text-5xl sm:text-4xl font-bold': variant === 'heading1',
			'text-5xl md:text-4xl sm:text-3xl font-bold': variant === 'heading2',
			'text-4xl md:text-3xl sm:text-2xl font-bold': variant === 'heading3',
			'text-3xl md:text-2xl font-semibold': variant === 'heading4',
			'text-2xl md:text-xl font-semibold': variant === 'heading5',
			'text-xl md:text-lg font-semibold': variant === 'heading6'
		},
		className
	);

	return (
		<Element className={classnames} {...restProps}>
			{children}
		</Element>
	);
};
