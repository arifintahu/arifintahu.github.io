<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <hr class="border-line has-background-white" />
        <div class="title">Miftahul Arifin</div>
        <div class="subtitle">
          Fullstack Web Developer. I love coding, and I aspire to become a great
          developer. Currently, I code every day, and write articles regularly.
        </div>
        <hr class="border-line min has-background-white" />
        <div class="social-links has-text-light">
          <a href="https://github.com/arifintahu" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/miftahul-arifin/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          </a>
          <a href="https://dev.to/arifintahu" target="_blank">
            <font-awesome-icon :icon="['fab', 'dev']" size="lg" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Greeting'
};
</script>

<style scoped>
.hero {
  align-items: center;
}
.hero .hero-body {
  max-width: 600px;
}
.container .border-line {
  height: 3px;
  margin-bottom: 20px;
  width: 100%;
}
.container .title {
  margin-bottom: 40px;
}
.border-line.min {
  width: 100px;
  margin: 0 auto 20px auto;
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.social-links a {
  text-decoration: none;
}
</style>
