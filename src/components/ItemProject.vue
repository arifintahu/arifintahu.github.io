<template>
  <div>
    <div class="card" @click="showModal">
      <div class="card-image">
        <img :src="item.images[0].url" :alt="item.images[0].description" />
      </div>
      <div class="card-title has-background-dark has-text-light">
        {{ item.title }}
      </div>
    </div>
    <ModalProject :item="item" :show="isShowModal" @close="handleClose" />
  </div>
</template>

<script>
import ModalProject from './ModalProject.vue';
export default {
  name: 'ItemProject',
  props: {
    item: Object
  },
  components: {
    ModalProject
  },
  data() {
    return {
      isShowModal: false
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    handleClose(val) {
      console.log(val);
      this.isShowModal = val;
    }
  }
};
</script>

<style scoped>
.card {
  --time: 0.5s;
  --radius: 15px;
  --scale: scale(1.05, 1.05);
}
.card {
  height: 250px;
  width: 300px;
  cursor: pointer;
  -webkit-transition: var(--time) ease-in-out;
  -moz-transition: var(--time) ease-in-out;
  -o-transition: var(--time) ease-in-out;
  transition: var(--time) ease-in-out;
  border-radius: var(--radius);
  position: relative;
}
.card:hover {
  -webkit-transform: var(--scale);
  -moz-transform: var(--scale);
  -o-transform: var(--scale);
  -ms-transform: var(--scale);
  transform: var(--scale);
}
.card .card-image {
  height: 100%;
  border-radius: var(--radius) var(--radius) 0 0;
}
.card .card-title {
  height: 60px;
  padding: 12px;
  position: absolute;
  width: 100%;
  border-radius: 0 0 var(--radius) var(--radius);
  transition: 0.75s ease-in-out;
  bottom: -60px;
  opacity: 0;
}
.card:hover .card-title {
  opacity: 100;
  bottom: 0;
}
.card-image img {
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius);
  object-position: left top;
}
@media (hover: none) {
  .card .card-title {
    opacity: 100;
    bottom: 0;
  }
}
</style>
