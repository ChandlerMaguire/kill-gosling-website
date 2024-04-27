<template>
  <h1 class="about-header">About</h1>
  <div class="bio-container">
    <img class="about-image" src="../assets/img/walter-screaming-fixed.png">
    <!-- <p class="bio-text">Columbus, OH rockers.<br>This used to be my solo project but now it's a band. We have an EP called 'Waster' coming out 4/24/24 via We're Trying Records.<br>Thanks to Walter, Violet & Christian for playing with me. Shout out to Marcus.<br>Maybe we'll have an actual bio at some point idk.<br>-Chandler</p> -->
    <p class="bio-text">Ohio via New Jersey heavyweights KILL GOSLING have been releasing music since 2021, and their latest offering and second EP Waster can be found on We’re Trying Records, a home for kitschy, homespun emotional tunes from the Midwest and beyond. Beginning as a solo acoustic project, vocalist and project figurehead Chandler J.M has enlisted some of Columbus’ best and brightest to propel the group into one of the tightest, flashiest, and most memorable bands around. 
<br>
<br>
Waster, the latest and most fully realized effort from the band, is packed with thick, dense sound recorded by guitarist Violet Eadie and ear catching poppy mastering courtesy of booked-and-busy scene vet Will Killingsworth. The band doesn’t waste a second of the tight near 10 minute runtime, kicking off with a blink-and-you-'ll-miss-it drum fill leading straight into verse one of “Bobby Hobby,” a floaty doo-wop-style opener that's in and out with two verses, two choruses, and a solo in less than a minute and a half. 
<br>
<br>
Touring around the Midwest in the coming months, with no plans of letting up, any summer plans that don’t involve Kill Gosling need updated. 
</p>
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
/* .about-header {
  position: top;
} */

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
