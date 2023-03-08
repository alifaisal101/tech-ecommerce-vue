<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> {{ currentLocale }} </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="setLocale(item.locale)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  methods: {
    setLocale(newLocale) {
      this.$i18n.locale = newLocale;
      this.i18n_locale = newLocale;
    },
  },

  data() {
    return {
      items: [
        { title: "English", locale: "en" },
        { title: "العربية", locale: "ara" },
      ],
      i18n_locale: this.$i18n.locale,
    };
  },

  computed: {
    // loops through the items and finds the item matching the current locale
    // then returns the title associated with the matching locale
    currentLocale() {
      let currentLangaugeTitle;

      this.items.map((item) => {
        if (this.i18n_locale === item.locale) {
          currentLangaugeTitle = item.title;
        }
      });
      return currentLangaugeTitle;
    },
  },
};
</script>

<style>
</style>