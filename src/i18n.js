import appConfig from './config';
import { createI18n } from 'vue-i18n';

const { i18n_locale, i18n_fallback_locale } = appConfig;

function loadLocaleMessages() {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

export default createI18n({
  legacy: false,
  locale: i18n_locale,
  fallbackLocale: i18n_fallback_locale,
  messages: loadLocaleMessages(),
});
