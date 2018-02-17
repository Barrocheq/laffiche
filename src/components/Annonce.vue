<template>
<<<<<<< HEAD
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
=======
  <v-flex xs2>
    <v-card class="elevation-0 bigger white--text" style="transition:0.2s;cursor:pointer;position: relative;border:solid 1px white;border-radius:50%;width: 330px; height:330px;background-color:rgba(0,0,0,0)">
		<!-- <v-icon large left color="white">insert_photo</v-icon> -->
			<div style="font-size:24px;position:absolute;top:32px;left:120px;">{{ card.name}}</div>

			<div style="font-size:30px;position:absolute;top:100px;width:100%;text-align:center">{{ card.title}}</div>
			
			<div style="padding-right:10px;padding-left:10px;font-size:16px;position:absolute;top:150px;width:100%;text-align:center">{{ card.text}}</div>


			  <div style="display:flex;justify-content:center;align-items:center;   padding-right:10px;padding-left:10px;font-size:16px;position:absolute;bottom:50px;width:100%;text-align:center">
          <div class="clock"></div>
          <p style="margin-bottom:-1px;margin-left:5px">	 Urgent</p>
        </div>

			  <div style="display:flex;justify-content:center;align-items:center;  padding-right:10px;padding-left:10px;font-size:16px;position:absolute;bottom:20px;width:100%;text-align:center">
          <div class="star"></div>
          <p style="margin-bottom:-1px;margin-left:5px">   {{card.score}}</p>
        </div>
				
>>>>>>> felix
    </v-card>
		<v-avatar size="100px" slot="activator" style="position:absolute;top:0px;left:0px;">
			<img :src="randomUser" alt="" height="100" style="border:solid 1px white">
		</v-avatar>
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
<<<<<<< HEAD
	    	datenow: '',
	    	show: true
=======
				textSize: true
>>>>>>> felix
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
			randomUser(){
				let randomUser = 'https://randomuser.me/api/portraits/women/'+ Math.floor(Math.random() * 50)+'.jpg'
				return randomUser
			},
	  	color: function () {
	  		if(this.card.pro) 
	  			return "white"
	  		else
	  			return "#FFEF61"
	  	}
	  }
	};
</script>

<<<<<<< HEAD
<style type="text/css">
	.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
=======
<style scoped>
.bigger:hover{
	width:340px !important;
	height: 340px !important;
}

.clock {
  background: url('/static/sprite.svg') no-repeat -54px -54px;
  width: 18px !important;
  height: 16px !important;
}

.star {
  background: url('/static/sprite.svg') no-repeat -34px -54px;
	width: 14px !important;
	height: 15px !important;
>>>>>>> felix
}
</style>
