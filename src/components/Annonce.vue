<template>
<transition name="fade">
  <v-flex xs2 v-show="show">
    <v-card :color="color" class="white--text" style="width: 330px">
      <v-card-title primary-title>
		<!-- <v-icon large left color="white">insert_photo</v-icon> -->
			<v-layout row wrap xs12 justify-align-content>
				<v-layout>
					<img src="../../static/img/avatar.svg" alt="" height="100">
			        <v-layout row wrap xs12>
						<div class="headline" xs12>{{card.title}}</div>
						<div xs12>
							<v-icon large left color="green" v-if="card.score=='good'">check_circle</v-icon>
							<v-icon large left color="orange" v-if="card.score=='weak'">check_circle</v-icon>
							<v-icon large left color="red" v-if="card.score=='bad'">check_circle</v-icon>
							<v-icon v-if="card.urgent" large left color="red">hourglass_empty</v-icon>
						</div>
			    	</v-layout>
			    </v-layout>
				<div>{{card.text}}</div>
		    </v-layout>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark >Enregistrer</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</transition>
</template>
<!-- <v-icon large color="green darken-2">check_circle</v-icon> -->
<script type="text/javascript">
	import moment from 'moment'

	export default {
	  name: "Annonce",
	  props: ['card'],
	  data: function() {
	    return {
	    	datenow: '',
	    	show: true
	    }
	  },
	  methods: {

	  },
	  mounted: function() {
	  	this.time()
	  	// console.log(this.card.timeToShow)
	  },
	  components: {

	  },
	  methods: {
	  	time() {
		    var self = this
		    this.datenow = moment().format().split('T')[1].split('+')[0].split(':')[2]

		    if(parseInt(this.datenow) % this.card.timeToShow  == 0) {
		    	this.show = !this.show
		    	this.datenow = ''
		    }

		    setTimeout(self.time, 1000)
		}
	  },
	  ready() {
	  },
	  computed: {
	  	color: function () {
	  		if(this.card.pro) 
	  			return "orange lighten-1"
	  		else
	  			return "green darken-2"
	  	}
	  }
	};
</script>

<style type="text/css">
	.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
