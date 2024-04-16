<template>
  <div class="bio-container">
    <img class="about-image" src="../assets/img/walter-screaming-fixed.png">
    <p class="bio-text">Columbus, OH rockers.<br>This used to be my solo project but now it's a band. We have an EP called 'Waster' coming out 4/24/24 via We're Trying Records.<br>Thanks to Walter, Violet & Christian for playing with me. Shout out to Marcus.<br>Maybe we'll have an actual bio at some point idk.<br>-Chandler</p>
    </div>
</template>

<script>
export default {
  name: 'AboutView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bio-container {
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-top: 20px;
}

.about-image {
  float: left;
  display: block;
  margin-right: 5px;
  width: 400px;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.bio-text {
  float: right;
  text-align: left;
  /* vertical-align: top; */
  margin-left: 10px;
  margin-top: 0;
  width: 400px;
}

</style>
