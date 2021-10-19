<template>
  <div class="modal" :class="{ 'd-flex': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head has-background-white">
        <p class="modal-card-title has-text-left">Pinterest Clone</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p class="body-description has-text-justified">
          This project was made in as a way to practice my GraphQL skills. I
          also used it to learn how to implement an ORM into my back-end, which
          in this case I used Sequelize. It replicats the famous column layout
          that Pinteres uses, and it exemplifies several small features present
          in the real website. I made a GraphQL API for my backend using Apollo
          Server, which allowed a wall between the clients and the API. The user
          can also login with their google account, and all info related to the
          user is saved in a ClearDB MySQL database. If the user wants to upload
          a pin, the image (and other details) are inserted to the database and
          uploaded to Cloudinary as an image storage.
        </p>
        <p class="body-skill has-text-justified">
          Skills:
          <span class="has-text-weight-bold"
            >ReactJS, GraphQL Apollo, Sequelize ORM, MySQL, NodeJS, ExpressJS,
            Styled Components, TypeScript, JavaScript, Google OAUTH,
            Cloudinary</span
          >
        </p>
        <div class="body-image">
          <img
            src="https://cdn.mos.cms.futurecdn.net/jU8HAQWqxPMgH3g6qSbA5.jpg"
            alt="Placeholder image"
          />
          <img
            src="https://cdn.mos.cms.futurecdn.net/jU8HAQWqxPMgH3g6qSbA5.jpg"
            alt="Placeholder image"
          />
        </div>
      </section>
      <footer class="modal-card-foot has-background-white">
        <button class="button">Source Code</button>
        <button class="button is-dark">Live Preview</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalProject',
  props: {
    show: Boolean
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
</style>
