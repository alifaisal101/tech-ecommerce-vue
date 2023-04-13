<template>
  <navbar-shop-vue />
  <router-view class="content" />
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

<style scoped>
.content {
  height: 99%;
}
</style>