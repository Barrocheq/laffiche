<template>
  <v-flex xs2>
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
							/
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
</template>
<!-- <v-icon large color="green darken-2">check_circle</v-icon> -->
<script type="text/javascript">
	export default {
	  name: "Annonce",
	  props: ['card'],
	  data: function() {
	    return {
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
	  	color: function () {
	  		if(this.card.pro) 
	  			return "orange lighten-1"
	  		else
	  			return "green darken-2"
	  	}
	  }
	};
</script>
