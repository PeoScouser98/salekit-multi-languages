import { Box, Typography } from '@/components/ui';
import ProcessSteps from './_components/steps';
import { useTranslations } from 'next-intl';

export default function DevelopmentProcessSection() {
	const t = useTranslations('landing_ns');

	return (
		<Box as='section' className='mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 py-20'>
			<Typography variant='heading3' as='h3' className='mx-auto max-w-5xl text-center text-primary'>
				{t('development_process_section.title')}
			</Typography>
			<ProcessSteps />
		</Box>
	);
}
