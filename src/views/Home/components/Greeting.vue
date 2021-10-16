<template>
  <div>
    <section class="hero is-dark is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="border-line"></div>
          <p class="title">Miftahul Arifin</p>
          <p class="subtitle">
            Fullstack Web Developer. I love coding, and I aspire to become a
            great developer. Curently, I code every day, and write articles
            regularly.
          </p>
          <div class="border-line min"></div>
          <div class="social-links">
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
  </div>
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
  border-bottom: 3px solid white;
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
</style>
