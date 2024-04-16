<template>
    <h1>Upcoming shows:</h1>
    <div class="flyers-container">
      <div class="flyer-group">
        <img src="@/assets/img/flyers/waster-release-show.png" class="show-flyer">
        <img src="@/assets/img/flyers/full-run.png" class="show-flyer">
      </div>
      <div class="flyer-group">
        <img src="@/assets/img/flyers/Akron-may-8.png" class="show-flyer">
        <img src="@/assets/img/flyers/indy-may-9.png" class="show-flyer">
      </div>
      <div class="flyer-group">
        <img src="@/assets/img/flyers/chi-may-10.png" class="show-flyer">
        <img src="@/assets/img/flyers/cincy-may-11.png" class="show-flyer">
      </div>
    </div>
</template>

<script>
export default {
  name: 'LiveView',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.flyers-container {
  display: inline-block;
}

.show-flyer {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 400px;
  max-width: 100%;
}

</style>
