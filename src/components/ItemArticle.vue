<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.cover_image" alt="Cover image" />
    </div>
    <div class="card-content has-text-left">
      <div class="title is-5">
        <a :href="item.canonical_url" target="__blank">
          {{ item.title }}
        </a>
      </div>
      <div class="author is-1">By {{ item.user.name }}</div>
      <div class="content">
        {{ item.description }}
      </div>
      <div class="time">{{ new Date(item.created_at).toDateString() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemArticle',
  props: {
    item: Object
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
.card .card-image {
  height: 200px;
  width: 100%;
}
.card-image img {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
}
.card-content .title {
  margin-bottom: 0px;
}
.card-content .author {
  margin-bottom: 12px;
}
.title a:hover {
  text-decoration: underline;
}
.card-content .time {
  position: absolute;
  bottom: 12px;
}

@media only screen and (min-width: 600px) {
  .card {
    flex-direction: row;
    max-width: 800px;
  }
  .card .card-image {
    height: 200px;
    width: 300px;
  }
  .card-image img {
    border-radius: 15px 0 0 15px;
  }
}
</style>
