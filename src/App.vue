<template>
  <v-app>
    <v-navigation-drawer id="nav-menu" width="320" v-if="!$route.meta.hideNavigation" floating app>
      <Navigation />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawer"
      id="nav-menu-mobile"
      width="320"
      v-if="!$route.meta.hideNavigation"
      permanent
      temporary
      style="display:none;"
    >
      <Navigation />
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <div class="top curvy-box" v-if="!$route.meta.hideTitleBar">
          <h2>
            <vue-typer :text="`> Hello, World! I'm ${GeneralData.title}!`" pre-erase-delay="7000"></vue-typer>
          </h2>
          <h4>
            <vue-typer :text="`> ${GeneralData.subtitle}`" pre-type-delay="5000" pre-erase="5000"></vue-typer>
          </h4>
        </div>

        <div class="middle curvy-box">
          <router-view></router-view>
        </div>
      </v-container>
    </v-content>

    <v-footer id="footer" app>
      <v-btn class="nav-button" dark @click.stop="drawer = !drawer">
        <v-icon left>{{icons.menu}}</v-icon>
      </v-btn>
      <small>&copy; Copyright {{CurrentYear}}, Khaled Al Mana</small>
    </v-footer>
  </v-app>
</template>
        
<script>
import Navigation from "./components/Navigation";
import { getData } from "./assets/helpers/options";
import { mdiMenu } from "@mdi/js";

const GeneralData = getData("general").data;

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    var CurrentYear = new Date().getFullYear();
    return { drawer: null, CurrentYear, GeneralData, icons: { menu: mdiMenu } };
  }
};
</script>

<style lang="scss">
//Okay I'm just importing a font here from GoogleFonts that I like A LOT
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
$font: Helvetica, "Roboto", sans-serif;
$bg-color: linear-gradient(230deg, lightblue, lightgrey);
//This is our #app div, it contains the whole universe of our website
body {
  background-image: $bg-color;
  * {
    font-family: $font !important;
  }
}

#app {
  background-color: inherit;
}

.top {
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  padding: 3px;
}

.curvy-box {
  // text-align: center;
  margin-top: 30px;
  height: 20%;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 3px 6px grey;
  background-color: whitesmoke;

  @media screen and (max-width: 1264px) {
    margin-left: 3%;
    margin-right: 3%;
    padding: 30px !important;
  }
}
.middle {
  padding: 5vh;
}

.title {
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  margin-bottom: 30px;
}

// Navigation Menu
@media screen and (min-width: 600px) {
  #nav-menu {
    background-color: inherit;
    border: 0px solid;
    margin-top: 30px;
    display: block;
  }
  #nav-menu-mobile {
  display: none;
  }
  #footer {
    background-color: inherit;
    margin: 0 auto;
    text-align: center;
    position: fixed;
  }
}

@media screen and (max-width: 600px) {
  #nav-menu-mobile {
    background-color: inherit;
    border: 0px solid;
    margin-top: 30px;
    display: block;
  }
  #nav-menu {
    display: none;
  }

  #footer {
    background-color: inherit;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
}
</style>
