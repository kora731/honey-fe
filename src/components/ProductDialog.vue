<template>
  <v-dialog @input="v => !v && $store.commit('selectProduct')">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" ref="show" style="display: none;" />
    </template>
    <product v-if="selectedProduct" showDetail="true" :item="selectedProduct" />
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
import Product from "./Product";

export default {
  name: "ProductDialog",
  computed: {
    ...mapState(["selectedProduct"])
  },
  watch: {
    selectedProduct() {
      if (this.selectedProduct) {
        this.$refs.show.click({});
      }
    }
  },
  components: { Product }
}
</script>

<style scoped>

</style>