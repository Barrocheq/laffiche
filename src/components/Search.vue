<template>
  <v-flex xs2>
    <v-toolbar
      class="elevation-0"
			style="width:300px;border-radius:5px"
      color="white"
      floating
      dense
    >
<<<<<<< HEAD
        <v-text-field @change="start" prepend-icon="search" hide-details single-line v-model="searchText"></v-text-field>
        <v-btn icon @click="reset">
=======
        <!--v-text-field prepend-icon="search" hide-details single-line></v-text-field-->
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-select
              autocomplete
              cache-items
              :items="items"
              :search-input.sync="search"
              v-model="select"
        ></v-select>
        
        <v-btn icon>
>>>>>>> felix
          <v-icon>mic</v-icon>
        </v-btn>
    </v-toolbar>
  </v-flex>
</template>


<script>
<<<<<<< HEAD
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
=======
export default {
  data() {
    return {
      items: [],
      search: null,
      select: [],
      states: [
        "Alabama",
        "Alaska",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  },
  watch: {
    search(val) {
      val && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });

      }, 0);
>>>>>>> felix
    }
  }
};
</script>


<style scoped>
.icon .material-icons .input-group__append-icon .input-group__icon-cb{
  color:red !important
}
div ul.list{
  display: none;
}
</style>
