<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Games</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item link to="/game">
            <v-list-item-title v-text="'Whack-a-mole'"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="'add'"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import UnityDisplay from "../components/UnityDisplay.vue";

export default {
  name: "AppShellView",
  data: function() {
    return {
      drawer: false
    };
  }
};

export const routes = [
  {
    path: "",
    component: HelloWorld
  },
  {
    path: "game",
    component: UnityDisplay
  }
];
</script>
