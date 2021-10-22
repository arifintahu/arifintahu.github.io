<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title has-text-dark">About Me</div>
        <hr class="border-line has-background-dark" />
        <div class="content">
          <div
            v-for="item in skills"
            :key="item.id"
            class="content-item has-text-left"
          >
            <h3 class="item-title">{{ item.title }}</h3>
            <hr class="item-divider has-background-dark" />
            <div
              v-for="(skill, index) in item.skills"
              :key="index"
              class="item-skill"
            >
              <h5 class="skill-title">{{ skill.title }}</h5>
              <div class="skill-detail">
                <ul>
                  <li v-for="(desc, key) in skill.descriptions" :key="key">
                    {{ desc }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSkills } from '@/repositories/skill';
export default {
  name: 'About',
  data() {
    return {
      skills: []
    };
  },
  mounted() {
    this.skills = getSkills();
  }
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
  margin: 0 auto 50px auto;
}
.container .content {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
.content .content-item {
  max-width: 400px;
}
.content-item .item-divider {
  height: 1px;
  width: 100%;
  margin: 12px 0;
}
.content-item .item-skill {
  margin-bottom: 12px;
}
</style>
