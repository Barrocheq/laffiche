<template>
  <v-flex xs2>
    <v-toolbar
      class="elevation-0"
			style="width:300px;border-radius:5px"
      color="white"
      floating
      dense
    >
        <v-text-field @change="start" prepend-icon="search" hide-details single-line v-model="searchText"></v-text-field>
        <v-btn icon @click="reset">

          <v-icon>close</v-icon>
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
.icon .material-icons .input-group__append-icon .input-group__icon-cb{
  color:red !important
}
div ul.list{
  display: none;
}
</style>
