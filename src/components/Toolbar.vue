<template>
  <div >
    <v-toolbar :class="{'mi-padding-lg-and-up': $vuetify.breakpoint.lgAndUp}" prominent flat fixed style="background-color:rgba(0,0,0,0);; height:72px">
      <v-toolbar-side-icon style="margin-top:12px"
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up red--text"></v-toolbar-side-icon>

      <v-toolbar-items class="hidden-sm-and-down" style="width:320px">
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-title style="margin-top:48px">
        <router-link to="/" tag="span" style="cursor: pointer;">
        <span class="blue--text hidden-sm-and-up" id="mi-toolbar-title-small">
          <div style="display:inline-block;margin-bottom:-7px;"  class="mi-logo-toolbar">
            <!--Title logo here-->
          </div>
        </span>
        <span class="blue--text hidden-xs-only" id="mi-toolbar-title">
          <div style="display:inline-block;margin-bottom:-4px;" class="mi-logo-toolbar">
            <!--Title logo here-->
          </div>
        </span>
        </router-link>
        <!--v-btn @click.native="checkStates()">States</v-btn-->
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-0" style="width:320px;">
        <v-spacer></v-spacer>
      </v-toolbar-items>
      <div class="hidden-md-and-up" style="width:50px;"></div>

    </v-toolbar>
    <v-navigation-drawer absolute temporary fixed v-model="sideNav">
      <v-toolbar flat color="white" style="height:62px">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <router-link to="/" tag="span" class="blue--text" style="cursor: pointer" id="mi-toolbar-title-small">
              <!--Title logo here-->
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      slider: 39,
      tile: false,
      sideNav: false
    };
  },
  methods: {
    /*checkStates() {
      console.log(this.$store.getters.loadFavoritesDetails)
    }*/
  },
  components: {
  },
  watch: {},
  computed: {

  }
};
</script>

<style scoped>
*{
  /*border:solid 1px red;*/
}
.mi-logo-toolbar {
  background: url("/static/sprite.svg") no-repeat -346px -39px;
	width: 133px;
	height: 58px;
}
#mi-toolbar-title {
  font-family: mainFont;
  font-size: 30px;
}
#mi-toolbar-title-small {
  font-family: mainFont;
  font-size: 25px;
}
.toolbar__items .btn {
  text-transform: none !important;
  font-size: 16px;
  color: #123555;
  height: 72px;
}
.toolbar__items .btn:hover {
  background-color: rgba(0, 0, 0, 0) !important;
}
.toolbar__items #mi-signup div {
  background-color: #ffC828 !important;
  height: 34px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>