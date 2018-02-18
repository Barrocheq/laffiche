<template>
  <v-flex xs2 style="cursor:pointer">

    <div v-if="!createAnnonce" class="newForm" @click="createAnnonce=!createAnnonce"></div>



    <transition name="pop">
  <v-flex xs2 v-if="createAnnonce">
    <v-card class="elevation-0 color-back bigger white--text" style="transition:0.2s;cursor:pointer;position: relative;border:solid 2px white;border-radius:50%;width: 330px; height:330px;background-color:rgba(0,0,0,0)">
		

        <v-form v-model="valid" v-if="createAnnonce">
    <v-text-field
      style="color:white;font-size:30px;position:absolute;top:60px;width:250px; margin-left:40px;text-align:center"
      placeholder="Votre nom"
      v-model="name"
      color="white"
      :counter="10"
    ></v-text-field>
    <v-text-field
      style="color:white;font-size:30px;position:absolute;top:100px;width:250px; margin-left:40px;text-align:center"
      placeholder="Titre de votre annonce"
      v-model="title"
      color="white"
    ></v-text-field>
    <v-text-field
      style="color:white;font-size:30px;position:absolute;top:140px;width:250px; margin-left:40px;text-align:center"
      placeholder="Text de votre annonce"
      v-model="text"
      color="white"
      multi-line
      rows="2"
    ></v-text-field>
    <div style="font-size:12px; position: absolute; top:230px;text-align:center; width:250px; margin-left:40px;">Scanner ce code pour accéder à votre annonce depuis votre smartphone</div>
    <div class="flashCode" style="position: absolute; top:280px;right:147px"></div>

    </v-form>

		      <v-layout>
      <v-flex class="mr-2">
        <div class="color-back o-button" @click="createAnnonce=!createAnnonce">Annuler</div>
      </v-flex>
      <v-flex class="ml-2">
        <div class="color-back o-button" @click="addAnnonce">Ajouter</div>
      </v-flex>
      </v-layout>


    </v-card>
  </v-flex>
</transition>



  </v-flex>
</template>


<script>
import json from "@/../static/data.json";

export default {
  data() {
    return {
      createAnnonce: false,
      valid: false,
      name: "",
      title: "",
      text: "",
      data: json
    };
  },
  methods: {
    addAnnonce() {
      let newAnnonce = {
        name: this.name,
        title: this.title,
        score: "5/5",
        urgent: false,
        text: this.text,
        pro: false,
        timeToShow: 10
      };

      this.$emit('posterAnnonce', newAnnonce)
      this.createAnnonce=!this.createAnnonce
    }
  }
};
</script>


<style scoped>
* {
  /*border:solid 1px red*/
}
.newForm {
  background: url("/static/sprite.svg") no-repeat -238px -14px;
  width: 94px !important;
  height: 94px !important;
}

.flashCode {
  background: url("/static/sprite.svg") no-repeat -106px -52px;
  width: 30px !important;
  height: 30px !important;
}
.o-button {
  height: 40px;
  border: solid 2px white;
  color: white;
  border-radius: 6px;
  text-align: center;
  font-size: 20px;
  margin-top: 350px;
  padding-top: 2px;
}

.pop-enter-active {
  transition: opacity 1s;
}
.pop-enter {
  opacity: 0;
}
</style>
