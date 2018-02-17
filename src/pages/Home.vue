<template>
  <div style="width:100%; border:solid 1px red">
    <Toolbar ref="Toolbar" style="margin-bottom:72px"/>
    <h1 style="color:red">home</h1>

  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
  </div>

    <Annonce ref="annonce"/>
  </div>
</template>

<script>
import Annonce from "@/components/Annonce";
import Toolbar from "@/components/Toolbar";

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
    Toolbar
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
