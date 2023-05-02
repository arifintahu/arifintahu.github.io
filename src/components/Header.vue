<template>
  <nav
    class="navbar is-fixed-top is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <p class="navbar-item" id="logo-text">
          {{ profile ? profile.name : '' }}
        </p>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarMenu"
        class="navbar-menu"
        :class="{ 'is-active': showNav }"
      >
        <div class="navbar-end">
          <a class="navbar-item" href="/#about">About</a>
          <a class="navbar-item" href="/#project">Projects</a>
          <a class="navbar-item" href="/#article">Articles</a>
          <a class="navbar-item" href="/#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getProfile } from '@/repositories/profile';

export default {
  name: 'Header',
  data() {
    return {
      showNav: false,
      profile: {}
    };
  },
  mounted() {
    this.profile = getProfile();
  }
};
</script>

<style scoped>
.navbar-end a.navbar-item {
  gap: 5px;
}

#logo-text {
  text-transform: uppercase;
  letter-spacing: 3px;
}
</style>
