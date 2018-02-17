<template>
  <div class="color-back" style="width:100%;height:100%;">
    <Toolbar ref="Toolbar"/>

  <vue-draggable-resizable :resizable="false" style="z-index:10">
    <Search ref="search"/>
  </vue-draggable-resizable>
    
        <vue-draggable-resizable :resizable="false" v-for="card in data" style="z-index:11">
      <Annonce ref="annonce" :card="card" />
    </vue-draggable-resizable>






  </div>
</template>

<script>
import Annonce from "@/components/Annonce";
import Toolbar from "@/components/Toolbar";
import Search from "@/components/Search";
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
    Toolbar,
    Search
  },
  computed: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@font-face {
  font-family: mainFont;
  src: url('/static/Quicksand-Bold.ttf');
}

* {
  font-family: mainFont;
}

.color-back {
	background: linear-gradient(-45deg, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
</style>
