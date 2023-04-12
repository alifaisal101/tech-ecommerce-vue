<template>
  <v-sheet width="300" class="mx-auto loginForm">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field
        v-model="email"
        :label="t('email-label')"
        @blur="validateEmail"
        type="email"
        :error-messages="emailError"
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        :label="t('password-label')"
        @blur="validatePassword"
        :error-messages="passwordError"
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
      if (!this.emailErrors || !this.passwordErrors) {
        return this.validateEmail() & this.validatePassword();
      }
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },

    validateEmail() {
      if (!this.email) {
        return (this.emailError = "Email can't be empty.");
      }

      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return (this.emailError = "Email is invalid.");
      }

      return (this.emailError = "");
    },
    validatePassword() {
      if (!this.password) {
        return (this.passwordError = "Password can't be empty.");
      }

      return (this.passwordError = "");
    },
  },

  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  },
};
</script>

<style>
.loginForm {
  margin-top: 10vh;
}
</style>