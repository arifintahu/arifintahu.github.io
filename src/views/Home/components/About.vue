<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <hr class="border-line has-background-white" />
        <div class="title">{{ profile ? profile.greeting : '' }}</div>
        <div class="subtitle">
          {{ profile ? profile.intro : '' }}
        </div>
        <hr class="border-line min has-background-white" />
        <div class="social-links has-text-light">
          <a :href="profile ? profile.social.github : ''" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a :href="profile ? profile.social.linkedin : ''" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          </a>
          <a :href="profile ? profile.social.twitter : ''" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </a>
          <a :href="profile ? profile.social.dev : ''" target="_blank">
            <font-awesome-icon :icon="['fab', 'dev']" size="lg" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getProfile } from '@/repositories/profile';

export default {
  name: 'About',
  data() {
    return {
      profile: {}
    };
  },
  mounted() {
    this.profile = getProfile();
  }
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
.social-links a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
