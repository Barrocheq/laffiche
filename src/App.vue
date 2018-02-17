<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "App"
};
</script>

<style>
*, *:active, *:focus{
  user-select: none;
  outline: none;
  text-decoration: none;
} 
</style>
