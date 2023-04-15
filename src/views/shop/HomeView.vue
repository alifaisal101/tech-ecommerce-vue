<template>
  <h1>{{ t("title") }}</h1>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<i18n>
  {
    "en": {
      "title": "home page"
    },
    "ara": {
      "title": "الصفحة الرئيسية"
    }
  }
</i18n>