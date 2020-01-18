<template>
  <v-dialog v-model="show" @input="v => !v && $store.commit('selectProduct')">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" ref="show" style="display: none;" />
    </template>
    <product @close="show = $store.commit('selectProduct')" v-if="selectedProduct" showDetail="true" :item="selectedProduct" :s1="s1" :s2="s2" :currency="currency" />
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
import Product from "./Product";

export default {
  name: "ProductDialog",
  props: ["s1", "s2", "currency"],
  data() {
    return {
      show: false
    }
  },
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