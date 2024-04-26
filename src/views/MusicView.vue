<template>
  <h1>New EP 'Waster' out  now<br>via We're Trying Records</h1>
  <img class="waster-art" src="../assets/img/waster-cover-art.png">
  <h2>Stream Kill Gosling:</h2>
  <div class="streaming-links-container">
    <a href="https://open.spotify.com/artist/3hgaJzmO7bwlLjTpVtxehi" target="_blank"><img src="@/assets/img/spotify-icon.png" class="streaming-link"></a>
    <a href="https://music.apple.com/us/artist/kill-gosling/1580643279" target="_blank"><img src="@/assets/img/apple-music-logo-final-fix.png" class="streaming-link"></a>
    <a href="https://weretryingrec.bandcamp.com/album/waster" target="_blank"><img src="@/assets/img/bandcamp-logo.png"  class="streaming-link"></a>
  </div>
</template>

<script>
export default {
  name: 'MusicView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.waster-art {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: 500px;
  max-width: 100%;
  /* filter: drop-shadow(4px 4px 2px #c79494); */
}

.streaming-links-container {
  display: flex;
  justify-content: center;
}

.streaming-link {
  width:  100px;
  height: 100px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
}

</style>
