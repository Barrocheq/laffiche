<template>
  <div class="color-back" style="width:100%;height:100%;">
    <Toolbar ref="Toolbar"/>

<<<<<<< HEAD
   <div v-for="card in data">
   <vue-draggable-resizable :resizable="false" :x="generateX()" :y="generateY()" >
      <Annonce ref="annonce" :card="card" />
    </vue-draggable-resizable>
  </div>
    <vue-draggable-resizable :resizable="false" :x="200" :y="200">
    <Search ref="search" v-on:clicked-show-detail="clickedShowDetailModal" v-on:reset="removeFilter"/>
  </vue-draggable-resizable>
=======
  <vue-draggable-resizable :resizable="false" style="z-index:10">
    <Search ref="search"/>
  </vue-draggable-resizable>
    
        <vue-draggable-resizable :resizable="false" v-for="card in data" style="z-index:11">
      <Annonce ref="annonce" :card="card" />
    </vue-draggable-resizable>





>>>>>>> felix

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
      dataRaw: json,
      search: '',
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  },
  mounted: function() {

  },
  components: {
    Annonce,
    Toolbar,
    Search
  },
  methods: {
    removeFilter: function (v) {
      this.data = this.dataRaw
    },
    clickedShowDetailModal: function(v) {
      let datatemps = this.data;
      this.data = []

      for(let i = 0; i < Object.keys(datatemps).length; i++) {
        if((datatemps[i].title.toLowerCase()).search(v.toLowerCase()) == 0) {
          this.data.push(datatemps[i])
        }

      }

      console.log(this.data)

    },
    generateX: function() {
      return Math.random()*1000;
    },
    generateY: function() {
      return Math.random()*600
    }
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
