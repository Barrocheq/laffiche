<template>
  <div style="width:100%; border:solid 1px red">
    <Toolbar ref="Toolbar" style="margin-bottom:72px"/>
    <h1 style="color:red">home</h1>

    <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;" >
      <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true" v-for="card in data">
        <Annonce ref="annonce" :card="card" />
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import Annonce from "@/components/Annonce";
import Toolbar from "@/components/Toolbar";
import json from "@/../static/data.json"
import Vue from "vue";
import VueDraggableResizable from "vue-draggable-resizable";

Vue.component("vue-draggable-resizable", VueDraggableResizable);


export default {
  name: "Home",
  data: function() {
    return {
      data: json,
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
  mounted: function() {
    // console.log(this.data)
  },
  components: {
    Annonce,
    Toolbar
  },
  computed: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
