<template>
    <img class="band-image" src="../assets/img/kg-at-manor-3.png">
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.band-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  width: 1000px;
  max-width: 100%
}
</style>
