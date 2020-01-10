<template>
  <span :class="{ 'green--text': value > 0, 'red--text': value < 0 }">{{text}}</span>
</template>

<script>
export default {
  name: "Colored",
  props: ["value", "digits"],
  computed: {
    text() {
      const { value } = this;
      const sign = value > 0 ? '+' : value < 0 ? '-' : '';
      return `${sign}$${Math.abs(value).toFixed(this.digits)}`;
    }
  }
}
</script>

<style scoped>

</style>