<template>
  <div class="card" style="border: 0.5px solid rgb(184, 184,184); border-radius: 10px;" v-bind:style="{'min-height': hCard}">
    <div v-if="imgShow" class="card-image">
      <figure class="image is-4by3">
        <img v-bind:src="srcImg" alt="Placeholder image" style="width:80%; height: 80%; display: block; margin-left: auto; margin-right: auto; width: 50%; padding-top: 3rem;">
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4" v-bind:style="{'text-align' : center}">{{title}}</p>
      <div class="content">{{body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAbout',
  props: {
    center: String,
    title: String,
    body: String,
    imgShow: String,
    srcImg: String,
    hCard: String
  }
}
</script>
