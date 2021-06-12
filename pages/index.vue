<template>
  <div class="downloadpdf">
    <div class="title">
      <h2>About Me</h2>
    </div>
    <v-card class="mx-auto my-auto inherit" max-width="auto">
      <v-layout row>
        <v-flex xs12 md4>
          <v-card-text>
            <v-avatar class="pa-0" color="teal" size="180">
              <img :src="`${$store.state.data.cv.aboutMe.logo}`" />
            </v-avatar>

            <v-card-title class="card-title">
              <h3>
                {{ $store.state.data.cv.aboutMe.name.first }}
                {{ $store.state.data.cv.aboutMe.name.last }}
              </h3>
            </v-card-title>

            <v-card-text>
              <div class="my-4 subtitle-2">
                <p>{{ $store.state.data.cv.aboutMe.position }}</p>
              </div>
              <a
                v-if="$store.state.data.cv.aboutMe.profiles.github.enabled"
                :href="`${$store.state.data.cv.aboutMe.profiles.github.url}`"
                target="_blank"
              >
                <v-icon large>{{ icons.mdiGithub }}</v-icon>
              </a>
              <a
                v-if="$store.state.data.cv.aboutMe.profiles.linkedin.enabled"
                :href="`${$store.state.data.cv.aboutMe.profiles.linkedin.url}`"
                target="_blank"
              >
                <v-icon large>{{ icons.mdiLinkedin }}</v-icon>
              </a>
            </v-card-text>
          </v-card-text>
        </v-flex>
        <v-divider vertical></v-divider>

        <v-flex xs12 md7 class="ps-3">
          <h4>
            <v-card-title class="card-title">Objective</v-card-title>
          </h4>
          <v-card-text>
            <div class="my-1 subtitle-1">
              <span>{{ $store.state.data.cv.aboutMe.objective }}</span>
            </div>
            <br /><br />
            <v-chip-group
              active-class="light-blue accent-4 white--text"
              column
              multiple
            >
              <div class="px-1 pr-2 subtitle-1 sub-head">
                <span>Languages</span>
              </div>
              <v-tooltip
                v-for="(languages, i) in $store.state.data.cv.aboutMe.languages"
                :key="i"
                top
              >
                <template #activator="{ on }">
                  <v-chip v-if="!$route.meta.largeChips" small v-on="on">{{
                    languages.name
                  }}</v-chip>
                  <v-chip v-if="$route.meta.largeChips" large v-on="on">{{
                    languages.name
                  }}</v-chip>
                </template>
                <span>{{ languages.tooltip }}</span>
              </v-tooltip>
            </v-chip-group>
            <br />
            <v-chip-group active-class="light-blue accent-4 white--text" column>
              <div class="px-1 pr-6 subtitle-1 sub-head">
                <span>Location</span>
              </div>
              <div class="px-1 subtitle-1 sub-head">
                <span>{{ $store.state.data.cv.aboutMe.location }}</span>
              </div>
            </v-chip-group>
            <br />
            <v-chip-group
              class="long-val-mobile pr-3"
              active-class="light-blue accent-4 white--text"
              column
            >
              <div class="px-1 my-1 subtitle-1 sub-head">
                <span>Contact Me</span> <br />
              </div>

              <a
                :href="`tel:${$store.state.data.cv.aboutMe.contact.phone}`"
                class="contact-icons"
              >
                <v-chip
                  v-if="!$route.meta.largeChips"
                  class="ma-1"
                  color="green"
                  outlined
                  pillz
                  small
                >
                  <v-icon left>mdi-phone</v-icon>
                  {{ $store.state.data.cv.aboutMe.contact.phone }}
                </v-chip>
                <v-chip
                  v-if="$route.meta.largeChips"
                  class="ma-1"
                  color="green"
                  outlined
                  pillz
                  large
                >
                  <v-icon left>mdi-phone</v-icon>
                  {{ $store.state.data.cv.aboutMe.contact.phone }}
                </v-chip>
              </a>

              <a
                :href="`mailto:${$store.state.data.cv.aboutMe.contact.phone}`"
                class="contact-icons"
              >
                <v-chip
                  v-if="!$route.meta.largeChips"
                  class="ma-1"
                  color="red"
                  outlined
                  pillz
                  small
                >
                  <v-icon left>mdi-email</v-icon>
                  {{ $store.state.data.cv.aboutMe.contact.email }}
                </v-chip>
                <v-chip
                  v-if="$route.meta.largeChips"
                  class="ma-1"
                  color="red"
                  outlined
                  pillz
                  large=""
                >
                  <v-icon left>mdi-email</v-icon>
                  {{ $store.state.data.cv.aboutMe.contact.email }}
                </v-chip>
              </a>
            </v-chip-group>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin } from "@mdi/js";

export default {
  name: "AboutMe",
  data() {
    return {
      icons: { mdiGithub, mdiLinkedin },
    };
  },
  async fetch() {
    await this.$store.dispatch("data/fetchData", "aboutMe");
  },
};
</script>

<style lang="scss" scoped>
.inherit {
  background-color: inherit !important;
  box-shadow: 0px 0px 0px white !important;
}
.card-title {
  margin-bottom: -20px;
}
.sub-head {
  margin-right: 1.2vw;
  display: inline;
}
.contact-icons {
  text-decoration: none;
}
.long-val-mobile {
  a {
    background-image: red !important;
  }
}
</style>
