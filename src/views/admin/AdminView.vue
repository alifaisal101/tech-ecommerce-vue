<template>
  <sidemenu-admin-vue />
  <navbar-admin-vue />
  <h1>I'm the admin</h1>
  <footer-admin-vue />
</template>

<script>
import NavbarAdminVue from "@/globals/admin-globals/Navbar.admin.vue";
import FooterAdminVue from "@/globals/admin-globals/Footer.admin.vue";
import SidemenuAdminVue from "@/globals/admin-globals/Sidemenu.admin.vue";

export default {
  components: {
    NavbarAdminVue,
    FooterAdminVue,
    SidemenuAdminVue,
  },
};
</script>

<style>
</style>