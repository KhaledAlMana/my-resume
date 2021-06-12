<template>
  <div class="not-found">
    <img :src="`${not_found_icon}`" />
    <h1>
      {{ pageNotFound }}
    </h1>
  </div>
</template>

<script>
var notFoundIcon = require("../assets/helpers/imgs/not-found.png");

export default {
  layout: "default",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      not_found_icon: notFoundIcon,
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style lang="scss">
.not-found {
  text-align: center;
  h1 {
    color: black;
  }
  .v-icon {
    color: darkgreen;
  }
}
</style>
