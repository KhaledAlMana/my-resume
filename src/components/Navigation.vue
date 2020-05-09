<template>
  <v-card id="nav-menu" class="bg-native pa-12" flat>
    <v-card class="nav-top" elevation="12" width="356">
      <div class="nav-float">
        <v-list class="nav" rounded>
          <router-link v-for="item in items" :key="item.link" :to="`${item.link}`">
            <v-list-item class="nav-item">
              <v-list-item-content>
                <v-list-item-title>
                  <!-- <span>&lt;</span> -->
                  {{ item.title }}
                  <!-- <span>/&gt;</span> -->
                </v-list-item-title>
              </v-list-item-content>
              <!-- <span>👉</span> -->
            </v-list-item>
          </router-link>
          <v-btn :href="`${cv}`" value="Open" class="download" download block>Download CV</v-btn>
        </v-list>
      </div>
    </v-card>
  </v-card>
</template>

<script>

import cvFile from '../assets/helpers/data/Khaled_Almana.pdf';

export default {
  name: "Navigation",
  data() {
    return {
      cv: cvFile,
      items: [
        { link: "/", title: "About Me" },
        { link: "/education", title: "Education" },
        { link: "/experience", title: "Experience" },
        { link: "/skills", title: "Skills" }
      ]
    };
  },
};
</script>


<style lang="scss" scoped>
.nav-top {
  border-radius: 15px 15px 15px 15px !important;
  margin-top: 30px;
  margin-left: 10%;

  .nav {
    padding: 1em;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 2px 2px grey;
    text-align: center;
    background-color: whitesmoke !important;

    a {
      color: inherit;
      text-decoration: none;

      .nav-item {
        margin: 0.667em;
        font-size: 0.9em;
        text-align: center;
        padding: 1px !important;
        border-radius: 10px 10px 10px 10px !important;
        background-color: whitesmoke;
      }

      .nav-item:hover {
        background-color: rgb(235, 233, 233);
      }

      &.router-link-exact-active {
        background-color: black;
        .nav-item {
          background-image: linear-gradient(290deg, lightblue, lightgrey);
          padding-left: 7px;
          color: black !important;
          font-weight: bold;
          box-shadow: 0px 2px 2px whitesmoke;
          span {
            font-size: 1.5em;
            display: inline-block;
          }
        }
      }

      span {
        display: none;
      }
    }
  }
}

.download {
  color: whitesmoke !important;
  font-weight: bold;
  background-color: black !important;
  margin-top: 2vh;
}
</style>