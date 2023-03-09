<template>
  <v-btn icon @click="toggleTheme"
    ><v-icon>{{ currentTheme }}</v-icon></v-btn
  >
</template>

<script>
import { useTheme } from "vuetify/lib/framework.mjs";

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },

  computed: {
    currentTheme() {
      return this.theme.global.current.value.dark
        ? "mdi-weather-night"
        : "mdi-weather-sunny";
    },
  },
};
</script>

<style>
</style>