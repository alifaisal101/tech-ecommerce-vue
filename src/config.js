import appConfig from './../config/app.json';

export default {
  api: appConfig.api || 'localhost:3000',
  i18n_locale: appConfig.i18n_locale || 'en',
  i18n_fallback_locale: appConfig.i18n_fallback_locale || 'en',
};
