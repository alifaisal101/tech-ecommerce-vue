<template>
  <navbar-shop-vue />
  <router-view />
  <footer-shop-vue />
</template>

<script>
import NavbarShopVue from "@/globals/shop-globals/Navbar.shop.vue";
import FooterShopVue from "@/globals/shop-globals/Footer.shop.vue";

export default {
  components: {
    NavbarShopVue,
    FooterShopVue,
  },
};
</script>

<style>
</style>