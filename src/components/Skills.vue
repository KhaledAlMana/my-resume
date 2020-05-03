<template>
  <div class="downloadpdf">
    <div class="title">
      <h2>Skills</h2>
    </div>
    <v-layout row>
      <v-flex xs12 md12 class="ps-12">
        <v-chip-group active-class="success success--text text--accent-1" column multiple>
          <div  v-for="(skill, i) in SkillsData" :key="i">
          <v-chip class="ma-2" color="primary" outlined v-if="$route.meta.largeChips" large> {{skill.name}}</v-chip>
          <v-chip class="ma-2" color="primary" outlined v-if="!$route.meta.largeChips"> {{skill.name}}</v-chip>
          </div>
        </v-chip-group>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { getData } from "../assets/helpers/options";

const SkillsData = getData("skills").data;

export default {
  name: "Skills",
  data() {
    return {SkillsData: SkillsData};
  }
};
</script>

<style lang="scss" scoped>
.skill {
  background-color: black !important;
  background-image: black !important;
  background: black !important;
}
</style>