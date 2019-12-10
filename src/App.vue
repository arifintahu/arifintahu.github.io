<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/logo.png">
        </router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="/#home">
            Home
          </a>
          <a class="navbar-item" href="/#about">
           About
          </a>
          <a class="navbar-item" href="/#projects">
           Projects
          </a>
          <a class="navbar-item" href="/#contact">
           Contact
          </a>
       </div>
     </div>      
    </nav>
    <router-view></router-view>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built by Miftahul Arifin.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      showNav: false
    }
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>