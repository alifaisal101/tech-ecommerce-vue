<template>
  <v-sheet width="600" class="mx-auto registerForm">
    <v-layout class="overflow-visible registerOption">
      <v-bottom-navigation class="btnGroup" v-model="isCompany" active>
        <!-- isCompany = 0 -->
        <v-btn class="registerOption_btn">{{ t("user-register") }}</v-btn>

        <!-- isCompany = 1 -->
        <v-btn class="registerOption_btn">{{ t("company-register") }}</v-btn>
      </v-bottom-navigation>
    </v-layout>
    <v-form validate-on="submit" @submit.prevent="">
      <v-text-field
        v-if="isCompany"
        v-model="companyName"
        :label="t('company-name-label')"
        @blur="validateCompanyName"
        type="text"
        :error-messages="companyNameError"
      ></v-text-field>
      <v-container class="namesContainer" v-else>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :error-messages="firstnameError"
              @blur="validateFirstName"
              :label="t('firstname-label')"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :error-messages="lastnameError"
              @blur="validateLastName"
              :label="t('lastname-label')"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
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
      <v-text-field
        v-model="cpassword"
        type="password"
        :label="t('cpassword-label')"
        @blur="validateCPassword"
        :error-messages="cpasswordError"
      ></v-text-field>
      <v-btn
        block
        class="mt-2 submitBtn"
        elevation="4"
        color="light-blue-darken-1"
        @click="register"
        >{{ t("register") }}</v-btn
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
    register() {
      this.validateCompanyName() &
        this.validateFirstName() &
        this.validateLastName() &
        this.validateEmail() &
        this.validatePassword() &
        this.validateCPassword();

      // if the user "is a Company" then check for company name validity
      // if the user is not then check for firstname and lastname validity
      if (
        (this.isCompany && this.companyNameError) ||
        (!this.isCompany && (this.firstnameError || this.lastnameError))
      ) {
        return false;
      }

      this.$store.dispatch("register", {
        isCompany: this.isCompany === 1,
        fname: this.firstname,
        lname: this.lastname,
        companyName: this.companyName,
        email: this.email,
        password: this.password,
        cPassword: this.cpassword,
      });
    },

    validateCompanyName() {
      if (!this.companyName) {
        return (this.companyNameError = this.t("empty-field"));
      }

      if (/\d/.test(this.companyName)) {
        return (this.companyNameError = this.t("non-alph-chars"));
      }

      return (this.companyNameError = "");
    },

    validateFirstName() {
      if (!this.firstname) {
        return (this.firstnameError = this.t("empty-field"));
      }

      if (/\d/.test(this.firstname)) {
        return (this.firstnameError = this.t("non-alph-chars"));
      }

      return (this.firstnameError = "");
    },

    validateLastName() {
      if (!this.lastname) {
        return (this.lastnameError = this.t("empty-field"));
      }

      if (/\d/.test(this.lastname)) {
        return (this.lastnameError = this.t("non-alph-chars"));
      }

      return (this.lastnameError = "");
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

      if (this.cpassword) {
        this.validateCPassword();
      }

      return (this.passwordError = "");
    },
    validateCPassword() {
      if (!this.cpassword) {
        return (this.cpasswordError = this.t("empty-cpassword"));
      }

      if (this.cpassword !== this.password) {
        return (this.cpasswordError = this.t("invalid-cpassword"));
      }

      return (this.cpasswordError = "");
    },
  },

  data() {
    return {
      isCompany: 0,
      companyName: "",
      companyNameError: "",
      firstname: "",
      firstnameError: "",
      lastname: "",
      lastnameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      cpassword: "",
      cpasswordError: "",
    };
  },
};
</script>
  
<style scoped>
.registerForm {
  margin-top: 12vh;
}

.btnGroup {
  box-shadow: none;
}

.btnGroup .registerOption_btn {
  font-size: larger;
}

.registerOption {
  margin: 2rem auto;
}
.namesContainer {
  padding: 0;
}
</style>

<i18n>
    {
        "en": {
            "user-register":"Register as A User",
            "company-register": "Register as A Company",
            "cpassword-label": "Password Confirmation",
            "firstname-label":"First Name",
            "lastname-label":"Last Name",
            "company-name-label":"Company Name",
            "empty-cpassword":"Confirmation Password must be entered",
            "invalid-cpassword":"Passwords don't match.",
            "empty-field":"Field can't be empty."

        },
        "ara" :{
            "user-register":"تسجيل دخول كمستخدم",
            "company-register": "تسجيل دخول كشركة",
            "cpassword-label":"تأكيد كلمة السر",
            "firstname-label":"الاسم الأول",
            "lastname-label":"الاسم الاخير",
            "company-name-label":"اسم الشركة",
            "empty-cpassword":"يجب تأكيد كلمة المرور",
            "invalid-cpassword":"كلمات السر لا تطابق",
            "empty-field":"يجب املاء الحقل"
        }
    }
</i18n>