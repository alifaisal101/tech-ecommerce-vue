<template>
  <v-app-bar on="4" class="navbar">
    <v-app-bar-title class="navbar-title">
      <router-link class="no-a-defaults" to="/">TechoShop</router-link>
    </v-app-bar-title>
    <ThemeToggler color="white" />
    <user-menu v-if="isLoggedIn">User thing</user-menu>

    <router-link v-else class="no-a-defaults" to="/login"
      ><v-btn color="white">Login</v-btn></router-link
    >

    <LanguageSelectorVue />
  </v-app-bar>
</template>

<script>
import LanguageSelectorVue from "@/components/containers/LanguageSelector.vue";
import ThemeToggler from "@/components/containers/ThemeToggler.vue";
import UserMenu from "@/components/containers/UserMenu.vue";

export default {
  name: "ShopNavbarGlobal",
  components: {
    LanguageSelectorVue,
    ThemeToggler,
    UserMenu,
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
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