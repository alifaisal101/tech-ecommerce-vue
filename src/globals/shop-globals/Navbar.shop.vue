<template>
  <v-app-bar on="4" class="navbar">
    <v-app-bar-title text="TechoShop" class="navbar-title" />
  </v-app-bar>
</template>

<script>
export default {
  name: "ShopNavbarGlobal",
};
</script>

<style scoped>
.navbar-title {
  font-weight: bold;
  font-size: 1.75em;
  color: whitesmoke;
}

.navbar {
  background-image: linear-gradient(to right, #2a89c6, #cc0000);
}
</style>