<template>
  <v-app-bar on="4" class="navbar">
    <v-app-bar-title class="navbar-title">
      <router-link class="no-a-defaults" to="/">TechoShop</router-link>
    </v-app-bar-title>
    <ThemeToggler color="white" />
    <user-menu v-if="isLoggedIn">User thing</user-menu>

    <div v-else>
      <router-link class="no-a-defaults" to="/login"
        ><v-btn color="white">{{ t("login") }}</v-btn></router-link
      >
      <router-link class="no-a-defaults" to="/register">
        <v-btn color="white"> {{ t("register-link") }} </v-btn>
      </router-link>
    </div>

    <LanguageSelectorVue />
  </v-app-bar>
</template>

<script>
import { useI18n } from "vue-i18n";

import LanguageSelectorVue from "@/components/containers/LanguageSelector.vue";
import ThemeToggler from "@/components/containers/ThemeToggler.vue";
import UserMenu from "@/components/containers/UserMenu.vue";

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },

  name: "ShopNavbarGlobal",
  components: {
    LanguageSelectorVue,
    ThemeToggler,
    UserMenu,
  },

  computed: {
    isLoggedIn() {
      console.log(this.$store.getters.isLoggedIn);
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