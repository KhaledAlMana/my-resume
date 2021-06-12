<template>
  <div class="downloadpdf">
    <div class="title">
      <h2>Skills</h2>
    </div>
    <v-layout row>
      <v-flex xs12 md12 class="ps-12">
        <v-chip-group
          active-class="success success--text text--accent-1"
          column
          multiple
        >
          <div v-for="(skill, i) in $store.state.data.cv.skills" :key="i">
            <v-chip
              v-if="$route.meta.largeChips"
              class="ma-2"
              color="primary"
              outlined
              large
            >
              {{ skill.name }}
            </v-chip>
            <v-chip
              v-if="!$route.meta.largeChips"
              class="ma-2"
              color="primary"
              outlined
            >
              {{ skill.name }}
            </v-chip>
          </div>
        </v-chip-group>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Skills",
  async fetch() {
    await this.$store.dispatch("data/fetchData", "skills");
  },
};
</script>

<style lang="scss" scoped>
.skill {
  background-color: black !important;
  background-image: black !important;
  background: black !important;
}
</style>
