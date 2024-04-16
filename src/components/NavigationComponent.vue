<template>
    <div id="browser-nav-container">
      <div class="menu">
        <RouterLink class="menu-item" to="/music">Music</RouterLink>
        <a href="https://www.weretryingrecords.com/merch/p/kill-gosling-waster-cassette" class="menu-item" target="_blank">Store</a>
        <RouterLink class="menu-item" to="/live">Live</RouterLink>
        <RouterLink class="menu-item" to="/about">About</RouterLink>
        <RouterLink class="menu-item" to="/contact">Contact</RouterLink>
      </div>
    </div>
</template>

<style>
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
</style>
