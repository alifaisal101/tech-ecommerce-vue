<template>
  <v-sheet width="300" class="mx-auto loginForm">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field
        v-model="email"
        :rules="rules"
        :label="t('email-label')"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules"
        :label="t('password-label')"
      ></v-text-field>
      <v-btn
        block
        class="mt-2 submitBtn"
        elevation="4"
        color="light-blue-darken-1"
        @click="login"
        >{{ t("login") }}</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },

  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.loginForm {
  margin-top: 10vh;
}
</style>