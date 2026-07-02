import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  const [common, navigation, home, about, services, contact, portfolio] = await Promise.all([
    import(`../../messages/${locale}/common.json`),
    import(`../../messages/${locale}/navigation.json`),
    import(`../../messages/${locale}/home.json`),
    import(`../../messages/${locale}/about.json`),
    import(`../../messages/${locale}/services.json`),
    import(`../../messages/${locale}/contact.json`),
    import(`../../messages/${locale}/portfolio.json`),
  ]);

  return {
    locale,
    messages: {
      common:     common.default     as Record<string, unknown>,
      navigation: navigation.default as Record<string, string>,
      home:       home.default       as Record<string, unknown>,
      about:      about.default      as Record<string, unknown>,
      services:   services.default   as Record<string, unknown>,
      contact:    contact.default    as Record<string, unknown>,
      portfolio:  portfolio.default  as Record<string, unknown>,
    },
  };
});
