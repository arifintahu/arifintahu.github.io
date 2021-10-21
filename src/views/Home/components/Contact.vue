<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title has-text-light">Contact Me</div>
        <hr class="border-line has-background-light" />
        <div class="content has-text-light">
          <a href="https://github.com/arifintahu" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/miftahul-arifin/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
          </a>
          <a href="mailto:miftahul97@gmail.com" target="_blank">
            <font-awesome-icon :icon="['fas', 'paper-plane']" size="3x" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

<style scoped>
.hero {
  align-items: center;
}
.hero .hero-body {
  max-width: 1100px;
}
.container .border-line {
  height: 3px;
  width: 60px;
  margin: 0 auto 20px auto;
}
.content {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.content a {
  text-decoration: none;
}
</style>
