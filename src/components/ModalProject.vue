<template>
  <div class="modal" :class="{ 'd-flex': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head has-background-white">
        <p class="modal-card-title has-text-left">{{ item.title }}</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p class="body-description has-text-justified">
          {{ item.description }}
        </p>
        <p class="body-description has-text-justified">
          Year Built:
          <span class="has-text-weight-bold">{{ item.year }}</span>
        </p>
        <p class="body-description has-text-justified">
          Skills:
          <span class="has-text-weight-bold">{{ item.skill }}</span>
        </p>
        <p class="has-text-justified">Screenshots:</p>
        <div class="body-image">
          <div
            v-for="(image, index) in item.images"
            :key="index"
            class="image"
            @click="handleShowImage(image.url)"
            :class="{ show: image.url == showImage }"
          >
            <img :src="image.url" :alt="image.description" />
            <div
              class="close"
              :class="{ show: image.url == showImage }"
              @click="handleShowImage(image.url)"
            >
              Click Image to close
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot has-background-white">
        <div class="button-group">
          <a v-if="item.source" :href="item.source" target="__blank">
            <button class="button">Source Code</button>
          </a>
          <a v-if="item.preview" :href="item.preview" target="__blank">
            <button class="button is-dark">Live Preview</button>
          </a>
          <a v-if="item.demo" :href="item.demo" target="__blank">
            <button class="button is-dark">Demo Video</button>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalProject',
  props: {
    show: Boolean,
    item: Object
  },
  data() {
    return {
      showImage: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close', false);
    },
    handleShowImage(url) {
      if (url == this.showImage) {
        this.showImage = '';
      } else {
        this.showImage = url;
      }
    }
  }
};
</script>

<style scoped>
.modal.d-flex {
  display: flex;
}
.modal-card-head .modal-card-title {
  margin: 0;
}
.modal-card {
  position: relative;
}
.modal-card-body .body-image {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}
.body-image .image {
  max-width: 280px;
  cursor: pointer;
}
.image .close {
  display: none;
}
.image .close.show {
  display: block;
  position: absolute;
  z-index: 100;
  bottom: 0;
  background-color: black;
  color: white;
  width: 100%;
  opacity: 0.5;
  cursor: pointer;
}
.image.show {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
}
.image.show img {
  height: 100%;
  object-fit: cover;
}
.modal-card-body .body-description {
  margin-bottom: 6px;
}
.image img {
  width: 100%;
  height: auto;
}
.modal-card-foot .button-group {
  display: flex;
  gap: 12px;
}
</style>
