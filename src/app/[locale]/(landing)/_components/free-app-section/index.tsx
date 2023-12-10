import { useTranslations } from 'next-intl';

export default function FreeAppSection() {
	const t = useTranslations('landing_ns');
	const freeApps = [
		{
			name: t('free_application_section.apps.create_discount'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(50000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.combo_product'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(50000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.bonus'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(50000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.survey_template'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(50000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.seo_optimize'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(100000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.notify'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(100000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.google_shopping'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(100000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.connect_delivery_service'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(100000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.connect_paying_online_service'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(200000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.pos'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(200000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		},
		{
			name: t('free_application_section.apps.online_course'),
			otherPrice: t('free_application_section.others.monthly_payment', {
				value: Number(200000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
			})
		}
	];

	return (
		<div className='bg-gray-100 px-6 py-20 sm:px-3'>
			<div className='mx-auto max-w-7xl'>
				<div className='scrollbar-thumb-300 overflow-x-auto rounded-lg bg-white p-2 scrollbar-thin scrollbar-track-gray-100'>
					<div className='table w-full overflow-clip rounded-lg'>
						<div className='table-row bg-gradient-to-r from-primary to-success'>
							<div className='table-cell whitespace-nowrap px-3 py-2.5 font-medium text-white'>
								{t('free_application_section.others.feature')}
							</div>
							<div className='table-cell whitespace-nowrap px-3 py-2.5 font-medium text-white'>
								{t('free_application_section.others.at_salekit')}
							</div>
							<div className='table-cell whitespace-nowrap px-3 py-2.5 font-medium text-white'>
								{t('free_application_section.others.other')}
							</div>
						</div>

						{freeApps.map((app, index) => (
							<div className='table-row border-b border-gray-200 bg-white text-sm last:border-none' key={index}>
								<div className='table-cell whitespace-nowrap px-3 py-2'>{app.name}</div>
								<div className='table-cell px-3 py-2 text-error'>
									{t('free_application_section.others.free_payment')}
								</div>
								<div className='table-cell px-3 py-2'>{app.otherPrice}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
