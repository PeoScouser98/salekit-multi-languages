const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [{ protocol: 'https', pathname: '**', hostname: '**' }]
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	env: {
		PORT: process.env.PORT
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

module.exports = withNextIntl(nextConfig);
