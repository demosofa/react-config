import { useTranslation } from 'react-i18next';
import { LOCALE } from '@constants';

export function Homepage() {
	const { t } = useTranslation();
	return <div>This is {t(LOCALE.Homepage)}</div>;
}
