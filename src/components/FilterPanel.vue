<template>
  <v-card class="filterPanel-duration" elevation="0">
    <v-card-title class="pa-0 body-2" @click="expanded = !expanded">
      <v-icon v-if="!expanded">mdi-plus</v-icon>
      <v-icon v-else>mdi-minus</v-icon>
      {{title}}
    </v-card-title>
    <v-card-text class="py-0">
      <v-item-group mandatory>
        <v-container>
          <v-row v-if="expanded && arrayMode">
            <v-checkbox
                    color="primary"
                    style="margin: 0 8px 0 0; padding: 0"
                    v-for="n in items.slice(0, showAll ? items.length : 5)"
                    :key="n"
                    @change="onchange(n)"
                    v-model="selected"
                    :value="n"
                    :label="(format && format.replace('$$', n)) || n"
            />
            <span v-if="!showAll && items.length > 5" @click="showAll = true" class="blue--text">Show more</span>
            <span v-if="showAll && items.length > 5" @click="showAll = false"  class="blue--text">Show less</span>
          </v-row>
          <v-row v-if="expanded && !arrayMode">
            <v-checkbox
                    color="primary"
                    style="margin: 0 8px 0 0; padding: 0"
                    v-for="[n, k] in items.slice(0, showAll ? items.length : 5)"
                    :key="n"
                    @change="onchange(n)"
                    v-model="value[k]"
                    :value="n"
                    :label="(format && format.replace('$$', n)) || n"
            />
            <span v-if="!showAll && items.length > 5" @click="showAll = true" class="blue--text">Show more</span>
            <span v-if="showAll && items.length > 5" @click="showAll = false" class="blue--text">Show less</span>
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
  computed: {
    arrayMode() { return this.value.length >= 0; }
  },
  methods: {
    onchange(v) {
      this.$gtag.event(this.ga, { event_category: "filter", event_label: v });
      if (this.arrayMode) this.$emit("input", this.selected);
    }
  },
  data() {
    return {
      expanded: true,
      showAll: false,
      selected: this.value
    };
  }
}
</script>

<style scoped>

</style>