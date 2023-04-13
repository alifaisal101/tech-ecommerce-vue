<template>
  <v-footer class="footer">
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>TechoShop</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "ShopFooterGlobal",

  methods: {
    allocateFooter() {},
  },
};
</script>

<style>
.footer {
  padding: 0;
}
</style>