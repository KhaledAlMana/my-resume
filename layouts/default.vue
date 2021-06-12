<template>
  <v-app class="bg-native">
    <v-navigation-drawer
      v-if="!$route.meta.hideNavigation"
      :id="$vuetify.breakpoint.mdAndDown ? `nav-menu-mobile` : `nav-menu`"
      v-model="drawer"
      class="bg-native"
      width="320"
      floating
      :temporary="$vuetify.breakpoint.mdAndDown"
      app
    >
      <div v-show="$vuetify.breakpoint.mdAndDown" class="nav-menu-mobile-close">
        <v-btn class="bg-native" @click.stop="drawer = !drawer">
          <v-icon medium>{{ icons.close }}</v-icon>
        </v-btn>
      </div>
      <navigation></navigation>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <typer-header></typer-header>

        <div class="middle curvy-box">
          <div id="nav-menu-mobile-btn">
            <v-btn class="nav-button" dark @click.stop="drawer = !drawer">
              <v-icon left>{{ icons.menu }}</v-icon>
            </v-btn>
          </div>

          <Nuxt />
        </div>
      </v-container>
    </v-main>
    <v-footer id="footer" class="bg-native" app>
      <small>&copy; Copyright {{ CurrentYear }}, Khaled Al Mana</small>
    </v-footer>
  </v-app>
</template>
<script>
import { mdiMenu, mdiClose } from "@mdi/js";

export default {
  name: "App",
  components: {},
  data() {
    const CurrentYear = new Date().getFullYear();
    return {
      drawer: null,
      CurrentYear,
      overwriteBreakpoint: true,

      icons: { menu: mdiMenu, close: mdiClose },
    };
  },
};
</script>

<style lang="scss">
//Okay I'm just importing a font here from GoogleFonts that I like A LOT

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

  span.nowrap {
    white-space: nowrap;
  }
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
    top: 33%;
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
