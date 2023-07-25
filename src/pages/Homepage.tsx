import { LOCALE } from 'constants/Locale';
import { useTranslation } from 'react-i18next';

export function Homepage() {
	const { t } = useTranslation();
	return <div>This is {t(LOCALE.Homepage)}</div>;
}
