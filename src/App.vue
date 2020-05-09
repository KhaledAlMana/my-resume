<template>
  <v-app class="bg-native">
    <v-navigation-drawer
      id="nav-menu"
      class="bg-native"
      width="320"
      v-if="!$route.meta.hideNavigation"
      floating
      app
    >
      <Navigation />
    </v-navigation-drawer>
    <v-navigation-drawer
      id="nav-menu-mobile"
      width="320"
      height="100%"
      v-if="!$route.meta.hideNavigation"
      v-model="drawer"
      temporary
      app
    >
      <div class="nav-menu-mobile-close">
        <v-btn class="bg-native" @click.stop="drawer = !drawer">
          <v-icon medium>{{icons.close}}</v-icon>
        </v-btn>
      </div>
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
          <div id="nav-menu-mobile-btn">
            <v-btn class="nav-button" dark @click.stop="drawer = !drawer">
              <v-icon left>{{icons.menu}}</v-icon>
            </v-btn>
          </div>

          <router-view></router-view>
        </div>
      </v-container>
    </v-content>
    <v-footer id="footer" class="bg-native" app>
      <small>&copy; Copyright {{CurrentYear}}, Khaled Al Mana</small>
    </v-footer>
  </v-app>
</template>
        
<script>
import Navigation from "./components/Navigation";
import { getData } from "./assets/helpers/options";
import { mdiMenu, mdiClose } from "@mdi/js";

const GeneralData = getData("general").data;

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    var CurrentYear = new Date().getFullYear();
    return {
      drawer: null,
      CurrentYear,
      GeneralData,
      icons: { menu: mdiMenu, close: mdiClose }
    };
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Khaled";
    }
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

.bg-native {
  background-color: inherit !important;
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
#nav-menu {
  border: 0px solid;
  margin-top: 30px;
}

#nav-menu-mobile {
  border: 0px solid;
  background-image: $bg-color;
}

#nav-menu-mobile-btn {
  display: none;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (max-width: 1263px) {
    top: 25%;
    right: 0px;
    position: fixed;
    display: inline-block;
    z-index: 1;
  }
}

.nav-menu-mobile-close {
  float: right;
  button {
    box-shadow: 0px 0px 0px grey;
  }
}

#footer {
  margin: 0 auto;
  text-align: center;
  position: relative;
}
</style>
