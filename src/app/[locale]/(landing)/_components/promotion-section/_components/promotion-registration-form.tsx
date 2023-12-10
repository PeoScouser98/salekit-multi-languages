import { Button, Input, Textarea } from '@/components/ui';
import { PhoneArrowUpRightIcon } from '@heroicons/react/20/solid';
import tw from 'tailwind-styled-components';
import { useTranslations } from 'use-intl';

export default function PromotionRegistrationForm() {
	const t = useTranslations();

	return (
		<Form>
			<FormTitle>{t('landing_ns.promotion_section.form_title')}</FormTitle>
			<Input placeholder={t('landing_ns.promotion_section.form_fields.full_name')} />
			<Input placeholder={'Email'} />
			<Input placeholder={t('landing_ns.promotion_section.form_fields.phone')} />
			<Input placeholder={t('landing_ns.promotion_section.form_fields.company')} />
			<Input placeholder={t('landing_ns.promotion_section.form_fields.business_sector')} />
			<Textarea rows={3} />
			<Button
				className='bg-gradient-to-r from-error to-warning'
				shape='pill'
				text={t('common_ns.actions.call_for_us')}
				size='lg'
				icon={PhoneArrowUpRightIcon}
			/>
		</Form>
	);
}
const Form = tw.form`flex flex-col md:max-w-full rounded-lg bg-white p-6 max-w-sm mx-auto gap-6 relative z-10 sm:max-w-full max-w-lg`;
const FormTitle = tw.h6`font-semibold text-center`;
