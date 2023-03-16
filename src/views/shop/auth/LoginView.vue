<template>
  <v-sheet width="300" class="mx-auto loginForm">
    <v-form validate-on="submit" @submit.prevent="login">
      <v-text-field
        v-model="email"
        name="email"
        :label="t('email-label')"
        :error="validation_errors.email?.isInvalid"
        :error-messages="validation_errors.email?.errorMessage"
        v-on:focusout="validate('email')"
      ></v-text-field>
      <v-text-field
        v-model="password"
        name="password"
        :label="t('password-label')"
        :error="validation_errors.password?.isInvalid"
        :error-messages="validation_errors.password?.errorMessage"
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
import { isEmail, isNotEmpty } from "class-validator";

const validateValue = (value, rules_str) => {
  const rules = rules_str.split("|");
  let isValid = true;

  loopScope: for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    switchScope: switch (rule) {
      case "required":
        isValid = isNotEmpty(value);
        if (!isValid) break loopScope;
        break switchScope;
      case "email":
        isValid = isEmail(value);
        if (!isValid) break loopScope;
        break switchScope;
    }
  }

  return isValid;
};

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

    validateEmail(inputName) {
      const result = validateValue(this[inputName], "required|email");
      if (!result) {
        this.validation_errors[inputName] = {
          isInvalid: true,
          errorMessage: "Email is Invalid",
        };
      } else {
        this.validation_errors[inputName] = {};
      }
    },
  },

  data() {
    return {
      email: "",
      password: "",
      validation_errors: {
        // email: {
        //   isInvalid: false,
        //   errorMessage: "",
        // },
      },
    };
  },
};
</script>

<style>
.loginForm {
  margin-top: 10vh;
}
</style>