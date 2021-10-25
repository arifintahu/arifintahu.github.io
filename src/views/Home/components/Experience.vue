<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title has-text-dark">Recent Experiences</div>
        <hr class="border-line has-background-dark" />
        <div class="content">
          <div
            v-for="item in experiences"
            :key="item.id"
            class="content-item has-text-left"
          >
            <h3 class="item-company">{{ item.company }}</h3>
            <hr class="item-divider has-background-dark" />
            <div class="item-job">
              <h5 class="job-title">{{ item.title }}</h5>
              <div class="job-period">{{ item.period }}</div>
              <div class="job-skill has-text-weight-light">
                Skills: {{ item.skill }}
              </div>
              <div class="job-activity">
                <ul>
                  <li v-for="(activity, index) in item.activities" :key="index">
                    {{ activity }}
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
import { getExperiences } from '@/repositories/experiences';
export default {
  name: 'Experience',
  data() {
    return {
      experiences: []
    };
  },
  mounted() {
    this.experiences = getExperiences();
  }
};
</script>

<style scoped>
.hero {
  align-items: center;
}
.hero .hero-body {
  max-width: 1000px;
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
  height: 3px;
  width: 100%;
  margin: 12px 0;
}

.item-job .job-title,
.item-job .job-period {
  margin-bottom: 5px;
}
</style>
