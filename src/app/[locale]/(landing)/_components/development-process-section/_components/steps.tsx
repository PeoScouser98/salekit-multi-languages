'use client';

import { Box } from '@/components/ui';
import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import tw from 'tailwind-styled-components';

const steps = [
	{
		name: 'development_process_section.step_1.title',
		description: 'development_process_section.step_1.description'
	},
	{
		name: 'development_process_section.step_2.title',
		description: 'development_process_section.step_2.description'
	},
	{
		name: 'development_process_section.step_3.title',
		description: 'development_process_section.step_3.description'
	},
	{
		name: 'development_process_section.step_4.title',
		description: 'development_process_section.step_4.description'
	},
	{
		name: 'development_process_section.step_5.title',
		description: 'development_process_section.step_5.description'
	},
	{
		name: 'development_process_section.step_6.title',
		description: 'development_process_section.step_6.description'
	},
	{
		name: 'development_process_section.step_7.title',
		description: 'development_process_section.step_7.description'
	},
	{
		name: 'development_process_section.step_8.title',
		description: 'development_process_section.step_8.description'
	},
	{
		name: 'development_process_section.step_9.title',
		description: 'development_process_section.step_9.description'
	}
];

const reorder = (index: number) => {
	switch (index + 1) {
		case 4:
			return 6;
		case 5:
			return 5;
		case 6:
			return 4;
		default:
			return index + 1;
	}
};

export default function ProcessSteps() {
	const t = useTranslations('landing_ns');
	const isSmallScreen = useMediaQuery('(min-width: 384px) and (max-width: 599px)');
	const isMediumScreen = useMediaQuery('(min-width: 600px) and (max-width: 1023px)');

	return (
		<Box as='nav' aria-label='Progress' className=''>
			<Steps role='list'>
				{steps.map((step: any, stepIndex: number) => {
					const order = isSmallScreen || isMediumScreen ? stepIndex + 1 : reorder(stepIndex);

					return (
						<StepItem
							key={stepIndex}
							className={cn({ 'pb-10': stepIndex !== steps.length - 1 })}
							style={{ order: order }}>
							<HorizontalStepConnector aria-hidden='true' />
							{(stepIndex + 1) % 3 === 0 && stepIndex !== steps.length - 1 && (
								<VerticalStepConnector
									className={cn({
										'-left-0 -translate-x-[calc(50%-6px)] -rotate-45 border-l-primary border-t-primary':
											stepIndex + 1 === 6,
										'right-0 translate-x-[calc(50%+6px)] rotate-45 border-r-primary border-t-primary':
											stepIndex + 1 === 3
									})}
								/>
							)}
							<StepGroup aria-current='step'>
								<StepIndex>{stepIndex + 1}</StepIndex>
								<Box className='flex min-w-0 -translate-y-0 flex-col justify-center gap-3 sm:-translate-y-1.5'>
									<StepTitle>{t(step.name)}</StepTitle>
									<StepDescription>{t(step.description)}</StepDescription>
								</Box>
							</StepGroup>
						</StepItem>
					);
				})}
			</Steps>
		</Box>
	);
}

const Steps = tw.ol`grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 max-w-5xl lg:max-w-[840px]`;
const StepItem = tw.li`relative sm:h-28 md:h-28`;
const StepIndex = tw.span`relative z-10 aspect-[1] flex h-14 w-14 sm:w-8 sm:h-8 text-lg font-bold items-center justify-center rounded-full border-4 sm:border-2 border-primary bg-white font-medium`;
const StepDescription = tw.span`px-3 text-sm text-gray-500`;
const StepTitle = tw.span`px-3 text-sm font-semibold whitespace-nowrap`;
const StepGroup = tw.div`group relative flex items-start`;
const HorizontalStepConnector = tw.div`absolute left-3 sm:top-4 top-6 mt-0.5 h-[2px] w-full bg-primary`;
const VerticalStepConnector = tw.div`absolute h-[calc(100%+2px)] top-[26px] aspect-square border-transparent rounded-full border-[3px] rounded-full sm:hidden md:hidden`;
