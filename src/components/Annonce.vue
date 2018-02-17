<template>
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
				
    </v-card>
		<v-avatar size="100px" slot="activator" style="position:absolute;top:0px;left:0px;">
			<img :src="randomUser" alt="" height="100" style="border:solid 1px white">
		</v-avatar>
  </v-flex>
</template>
<!-- <v-icon large color="green darken-2">check_circle</v-icon> -->
<script type="text/javascript">
	export default {
	  name: "Annonce",
	  props: ['card'],
	  data: function() {
	    return {
				textSize: true
	    }
	  },
	  methods: {

	  },
	  mounted: function() {
	  	console.log(this.card)
	  },
	  components: {

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
}
</style>
