<template>
    <div id="mobile-nav">
      <div class="mobile-menu">
        <RouterLink class="mobile-menu-item" to="/music">Music</RouterLink>
        <a href="https://www.weretryingrecords.com/merch/p/kill-gosling-waster-cassette" class="mobile-menu-item" target="_blank">Store</a>
        <RouterLink class="mobile-menu-item" to="/live">Live</RouterLink>
        <RouterLink class="mobile-menu-item" to="/about">About</RouterLink>
        <RouterLink class="mobile-menu-item" to="/contact">Contact</RouterLink>
      </div>
    </div>
</template>

<style>
.mobile-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: start;
  width: 100%;
  max-width: 350px;
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
  margin-right: 20px;
}
</style>
