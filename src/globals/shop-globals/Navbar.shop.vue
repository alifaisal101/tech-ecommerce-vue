<template>
  <v-app-bar on="4" class="navbar">
    <v-app-bar-title text="TechoShop" class="navbar-title" />
    <ThemeToggler color="white" />
    <LanguageSelectorVue />
  </v-app-bar>
</template>

<script>
import LanguageSelectorVue from "@/components/containers/LanguageSelector.vue";
import ThemeToggler from "@/components/containers/ThemeToggler.vue";
export default {
  name: "ShopNavbarGlobal",
  components: {
    LanguageSelectorVue,
    ThemeToggler,
  },
};
</script>

<style scoped>
.navbar-title {
  font-weight: bold;
  font-size: 2.2em;
  color: whitesmoke;
}

.navbar {
  background-image: linear-gradient(to right, #2a89c6, #cc0000);
}
</style>