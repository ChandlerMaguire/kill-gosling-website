<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<template>
  <div id="app">
    <div id="mobile-nav" v-if="mobileNav">
      <div class="mobile-menu">
        <RouterLink class="mobile-menu-item" to="/music" @click="toggleMobileNav">Music</RouterLink>
        <a href="https://www.weretryingrecords.com/merch/p/kill-gosling-waster-cassette" class="mobile-menu-item" target="_blank" @click="toggleMobileNav">Store</a>
        <RouterLink class="mobile-menu-item" to="/live" @click="toggleMobileNav">Live</RouterLink>
        <RouterLink class="mobile-menu-item" to="/about" @click="toggleMobileNav">About</RouterLink>
        <RouterLink class="mobile-menu-item" to="/contact" @click="toggleMobileNav">Contact</RouterLink>
      </div>
    </div>
    <div id="mobile-nav-container" v-if="mobile">
      <RouterLink to="/"><img class="mobile-banner-image" src="@/assets/img/kg-ransom-logo.png" v-show="!mobileNav"></RouterLink>
      <bars-3-icon class="nav-icon" @click="toggleMobileNav"/>
    </div>
    <div id="browser-nav-container" v-if="!mobile">
      <RouterLink to="/"><img class="browser-banner-image" src="@/assets/img/kg-ransom-logo.png"></RouterLink>
      <div class="menu">
        <RouterLink class="menu-item" to="/music">Music</RouterLink>
        <a href="https://www.weretryingrecords.com/merch/p/kill-gosling-waster-cassette" class="menu-item" target="_blank">Store</a>
        <RouterLink class="menu-item" to="/live">Live</RouterLink>
        <RouterLink class="menu-item" to="/about">About</RouterLink>
        <RouterLink class="menu-item" to="/contact">Contact</RouterLink>
      </div>
    </div>
  </div>
  <div class="container">
    <RouterView/>
    <footer>
      <h4 class="footer-text">Follow KG:</h4>
      <div class="socials-container">
        <a href="https://twitter.com/killgosling" target="_blank"><img src="@/assets/img/twitter-pure-black.png" class="social-link"></a>
        <a href="https://www.instagram.com/killgosling" target="_blank"><img src="@/assets/img/instagram.png" class="social-link"></a>
      </div>
    </footer>
  </div>
</template>

<script>
import { Bars3Icon } from '@heroicons/vue/24/solid'

export default {
  name: "App",
  data: () => {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 1000) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.showNav = false;
    }
  },
  mounted() {
        document.title = "Kill Gosling";
        this.$nextTick(this.checkScreen());
            },
  components: { Bars3Icon },
  computed() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen;
  }
}
</script>

<style>
@font-face {
    font-family: Tabloid-Scuzzball;
    src: url('@/assets/fonts/Tabloid-Scuzzball.otf');
}

#app {
  font-family: Tabloid-Scuzzball;
  letter-spacing: .1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
body {
  background: #ffb6c7;
}

/* browser */
.browser-banner-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1080px;
  max-width: 100%;
}

.menu {
  display: flex;
  font-size: 30px;
  width: 600px;
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
  margin-top: -2rem;
  margin-bottom: 5px;
}

.menu-item {
  flex: 1;
  text-align: center;
  color: black;
  text-decoration: none;
  transition: 0.2s;
}

.menu-item:hover {
  color: #ff568b;
  text-decoration: underline;
}

.nav-icon {
  float: right;
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 8px;
  width: 3rem;
}

/* mobile */
.mobile-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: start;
  width: 100%;
  max-width: 310px;
  height: 100%;
  background-color: black;
  top: 0;
  left: 0;
  margin-right: -4px;
}

.mobile-menu-item {
  margin-left: 0;
  font-size: 50px;
  color: #ffb6c7;
  text-decoration: none;
  margin-right: 5px;
  padding-top: 10px;
  margin-left: 20px;
}

#mobile-nav-container {
  display: inline-block;
  margin-bottom: 4rem;
  margin-top: -10vw;
}

.mobile-banner-image {
  float: left;
  position: absolute;
  left: 0;
  width: 334px;
  margin-left: 10px;
  max-width: 70vw;
}

.footer-text {
  margin-top: 5px;
  margin-bottom: 0rem;
}

.socials-container {
  margin-top: 5px;
}

.social-link {
  width:  50px;
  height: 50px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
}

.open {
  transform: translateX(300px);
}

@media only screen and (max-width: 1000px){
  
}
</style>
