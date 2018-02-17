<template>
  <div style="width:100%">
    <h1>home</h1>
    <Annonce ref="annonce"/>
  </div>
</template>

<script>
import Annonce from "@/components/Annonce";

export default {
  name: "Home",
  methods: {},
  mounted: function() {},
  components: {
    Annonce
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
