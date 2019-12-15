<template>
  <div class="card" style="border: 0.5px solid rgb(184, 184,184);">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="src" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4" style="min-height: 70px;">{{title}}</p>
      <div class="content" style="min-height: 70px;">{{body}}</div>
      <router-link :to="{ name: 'project', params: { index: index, view: view }}"  class="button is-outlined" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">View Project</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProject',
  props: {
    title: String,
    body: String,
    src: String,
    view: String,
    index: String
  }
}
</script>
