const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	important: true,
	theme: {
		colors: {
			primary: '#3b82f6',
			'primary-active': '#2563eb',
			secondary: '#f59e0b',
			'secondary-active': '#d97706',
			info: '#22d3ee',
			'info-active': '#06b6d4',
			error: '#f43f5e',
			'error-active': '#e11d48',
			success: '#34d399',
			'success-active': '#10b981',
			warning: '#eab308',
			'warning-active': '#d97706',
			disabled: '#9ca3af',
			'base-content-active': '#3f3f46',
			'base-content': '#374151',
			...colors
		},
		screens: {
			sm: {
				min: '320px',
				max: '599px'
			},
			md: {
				min: '600px',
				max: '1023px'
			},
			lg: {
				min: '1024px',
				max: '1365px'
			},
			xl: { min: '1366px' },
			xxl: { min: '1920px' }
		},
		extend: {
			transitionProperty: {
				height: 'height',
				'max-height': 'max-height',
				spacing: 'margin, padding'
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			animation: {
				slide: 'shimmer 1.6s ease infinite',
				roller: 'spin 1.2s ease infinite'
			},
			keyframes: {
				shimmer: {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				spin: {
					'0%': { transform: 'rotate(0turn)' },
					'100%': { transform: 'rotate(1turn)' }
				}
			}
		}
	},
	plugins: [
		require('@headlessui/tailwindcss'),
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar')({ nocompatible: true })
	]
};
