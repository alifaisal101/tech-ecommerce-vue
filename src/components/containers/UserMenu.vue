<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        class="selectLangBtn"
        color="red-lighten-5"
        v-bind="props"
        prepend-icon="mdi-account"
      >
      </v-btn>
    </template>
    <v-card class="mx-auto" max-width="344" variant="outlined">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">OVERLINE</div>
          <div class="text-h6 mb-1">Headline</div>
          <div class="text-caption">
            Greyhound divisely hello coldly fonwderfully
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined"> Button </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {};
</script>

<style>
</style>