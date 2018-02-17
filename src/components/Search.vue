<template>
  <v-flex xs2>
    <v-toolbar
			style="width:300px;border-radius:5px"
      color="white"
      floating
      dense
    >
        <v-text-field @change="start" prepend-icon="search" hide-details single-line v-model="searchText"></v-text-field>
        <v-btn icon @click="reset">
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
        this.searchText = ""
      },
      start () {
        if (this.searchText == "" ) {
          this.$emit('reset', this.searchText);
        }
        this.$emit('clicked-show-detail', this.searchText);
      },
      reset () {
        this.searchText = ""
        this.$emit('reset', this.searchText);
      }
    }
  }
</script>


<style scoped>

</style>
