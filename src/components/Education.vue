<template>
  <div class="downloadpdf">
    <div class="title">
      <h2>Education</h2>
    </div>
    <v-timeline dense class="timeline">
      <v-timeline-item v-for="(education, i) in EducationData" :key="i" color="blue">
        <template v-slot:icon>
          <a :href="`${education.website}`">
            <v-avatar>
              <img :src="`${education.logo}`" />
            </v-avatar>
          </a>
        </template>
        <v-card class="elevation-3 curve">
          <h3 class="period" v-text="`${education.period}`"></h3>
          <v-card-title :class="`font-weight-bold ${education.color}--text`">{{education.degree}}</v-card-title>
          <v-card-text>
            <h3 class="font-weight-bold mb-2">{{education.university}}</h3>
            <h3 class="font-weight-bold mb-2">GPA: {{education.gpa}}</h3>
            <p class="font-weight-light mb-4">{{education.description}}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { getData } from "../assets/helpers/options";

const EducationData = getData("education").data;

export default {
  name: "Experience",
  data() {
    return { EducationData };
  }
};
</script>
<style lang="scss" scoped>
.city{
  font-size: 70%;
}
.period{
  padding-top: 10px;
  padding-left: 15px;
  color: gray;
}
.timeline{
  @media screen and (max-width: 600px){
    margin-left: -10vw;
  }
  @media only screen and (min-width: 768px){
    margin-left: -2vw;
  }
}
.curve{
  border-radius: 15px 15px 15px 15px !important;
}
</style>