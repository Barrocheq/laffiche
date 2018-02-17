<template>
  <div style="width:100%;height:100%;border:solid 1px red">
    <Toolbar ref="Toolbar" style="margin-bottom:72px"/>


<vue-draggable-resizable :resizable="false">
  <Annonce ref="annonce"/>
</vue-draggable-resizable>

<vue-draggable-resizable :resizable="false">
  <Annonce ref="annonce"/>
</vue-draggable-resizable>


<vue-draggable-resizable :resizable="false">
  <Search ref="search"/>
</vue-draggable-resizable>

  </div>
</template>

<script>
import Annonce from "@/components/Annonce";
import Toolbar from "@/components/Toolbar";
import Search from "@/components/Search";

import Vue from "vue";
import VueDraggableResizable from "vue-draggable-resizable";

Vue.component("vue-draggable-resizable", VueDraggableResizable);


export default {
  name: "Home",
  data: function() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  },
  methods: {
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    }
  },
  mounted: function() {},
  components: {
    Annonce,
    Toolbar,
    Search
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
