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
        <p class="body-skill has-text-justified">
          Skills:
          <span class="has-text-weight-bold">{{ item.skill }}</span>
        </p>
        <div class="body-image">
          <img
            v-for="(image, index) in item.images"
            :key="index"
            :src="image.url"
            :alt="image.description"
          />
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
  methods: {
    closeModal() {
      this.$emit('close', false);
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
.modal-card-body .body-image {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}
.body-image img {
  max-width: 280px;
  height: auto;
}
.modal-card-foot .button-group {
  display: flex;
  gap: 12px;
}
</style>
