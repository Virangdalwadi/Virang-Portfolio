import { useTranslation } from 'react-i18next';
import { Seo } from '../components/Seo';
import { LegalLayout } from '../components/LegalLayout';
import { legal } from '../data/legal';

export default function LegalNoticePage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo path="/legal-notice" title={`${t('legal.title')} | Virang Dalwadi`} description={t('legal.metaDescription')} />
      <LegalLayout doc={legal} other={{ to: '/privacy-policy', label: 'Privacy policy' }} />
    </>
  );
}
