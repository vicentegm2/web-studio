import {NextIntlClientProvider, useMessages} from 'next-intl';
import {getTranslator} from 'next-intl/server';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';
 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslator(locale, 'Metadata');
 
  return {
    title: t('title'),
    description: t('description')
  };
}
 
export default function LocaleLayout({children, params: {locale}}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Using `useMessages` is necessary for the provider to receive messages
  const messages = useMessages();
 
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
