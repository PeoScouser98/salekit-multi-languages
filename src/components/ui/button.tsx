'use client'

import { cn } from '@/utils/cn';
import { forwardRef, useRef } from 'react';

declare type TButtonProps = {
	as?: keyof React.ElementType | React.ElementType;
	size?: 'xs' | 'sm' | 'md' | 'lg';
	shape?: 'square' | 'pill' | 'circle';
	variant?: 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning' | 'outline' | 'ghost' | 'disabled';
	icon?: React.ElementType;
	loading?: boolean;
	text?: string;
	rtl?: boolean;
};

export const Button: React.ForwardRefExoticComponent<TButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> =
	forwardRef((props, ref) => {
		const { as, variant, shape, size, loading, text, children, disabled, rtl, ...restProps } = props;

		const Element = as || 'button';

		const localRef = useRef(null);
		const resolvedRef = ref || localRef;

		const buttonStyles = cn(
			{
				btn: true,
				/* Variant */
				'btn-primary': variant === 'primary',
				'btn-secondary': variant === 'secondary',
				'btn-outline': variant === 'outline',
				'btn-ghost': variant === 'ghost',
				'btn-info': variant === 'info',
				'btn-success': variant === 'success',
				'btn-error': variant === 'error',
				'btn-disabled': variant === 'disabled',
				/* Shape */
				'btn-square': shape === 'square',
				'btn-circle': shape === 'circle',
				'btn-pill': shape === 'pill',
				/* Size */
				'btn-xs': size === 'xs',
				'btn-sm': size === 'sm',
				'btn-md': size === 'md',
				'btn-lg': size === 'lg',

				'flex-row-reverse': Boolean(rtl)
			},
			props.className
		);

		return (
			<Element
				{...restProps}
				role='button'
				className={buttonStyles}
				ref={resolvedRef as typeof localRef}
				disabled={variant === 'disabled' || disabled}>
				{/* {loading && <LoadingSpinner size="sm" />} */}
				{props.icon && (
					<props.icon
						className={cn('aspect-square', {
							'h-4': !size || size === 'xs' || size === 'sm',
							'h-6': size === 'md' || size === 'lg'
						})}
					/>
				)}
				{children || text}
			</Element>
		);
	});

Button.defaultProps = {
	as: 'button',
	variant: 'primary',
	rtl: false
};
