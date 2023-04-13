<template>
  <v-sheet width="300" class="mx-auto loginForm">
    <v-form validate-on="submit" @submit.prevent="">
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
      this.validateEmail() & this.validatePassword();
      if (this.emailError || this.passwordError) {
        return false;
      }
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },

    validateEmail() {
      if (!this.email) {
        return (this.emailError = this.t("empty-email"));
      }

      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return (this.emailError = this.t("invalid-email"));
      }

      return (this.emailError = "");
    },
    validatePassword() {
      if (!this.password) {
        return (this.passwordError = this.t("empty-password"));
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