<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title has-text-dark">Recent Articles</div>
        <hr class="border-line has-background-dark" />
        <div class="content">
          <ItemArticle v-for="item in articles" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ItemArticle from '@/components/ItemArticle.vue';
import { getArticles } from '@/repositories/articles';

export default {
  name: 'Article',
  components: {
    ItemArticle
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    getArticles().then((data) => {
      this.articles = data;
    });
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
  justify-content: space-around;
  gap: 30px;
}
</style>
