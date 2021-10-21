<template>
  <nav
    class="navbar is-fixed-top is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/"> Miftahul Arifin </a>
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
        <div class="navbar-start">
          <a class="navbar-item" href="/#home">Home</a>
          <a class="navbar-item" href="/#project">Projects</a>
          <a class="navbar-item" href="/#about">About</a>
          <a class="navbar-item" href="/#contact">Contact</a>
        </div>
        <div class="navbar-end">
          <a
            href="https://github.com/arifintahu/arifintahu.github.io"
            target="__blank"
            class="navbar-item"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            </span>
            <span>Star</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style scoped>
.navbar-end a.navbar-item {
  gap: 5px;
}
</style>
