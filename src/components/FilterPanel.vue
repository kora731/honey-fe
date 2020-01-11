<template>
  <v-card class="filterPanel-duration" elevation="0">
    <v-card-title class="pa-0 body-2">{{title}}</v-card-title>
    <v-card-text class="py-0">
      <v-item-group mandatory>
        <v-container>
          <v-row>
            <v-checkbox
                    color="primary"
                    style="margin: 0 8px 0 0; padding: 0"
                    v-for="n in items"
                    :key="n"
                    @change="onchange(n)"
                    v-model="selected"
                    :value="n"
                    :label="format.replace('$$', n)"
            />
          </v-row>
        </v-container>
      </v-item-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FilterPanel",
  props: ["title", "value", "items", "format", "ga"],
  methods: {
    onchange() {
      this.$gtag.event(this.ga);
      this.$emit("input", this.selected);
    }
  },
  data() {
    return {
      selected: [...this.value]
    };
  }
}
</script>

<style scoped>

</style>