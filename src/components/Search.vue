<template>
  <v-flex xs2>
    <v-toolbar
			style="width:300px;border-radius:5px"
      color="white"
      floating
      dense
    >
        <v-text-field @click="clear" prepend-icon="search" hide-details single-line>{{searchText}}</v-text-field>
        <v-btn icon>
          <v-icon>mic</v-icon>
        </v-btn>
    </v-toolbar>
  </v-flex>
</template>


<script>
  export default {
    data: () => ({
			searchText: ""
    }),
    methods: {
      clear () {
        this.searchText =""
      }
    }
  }
</script>


<style scoped>

</style>
