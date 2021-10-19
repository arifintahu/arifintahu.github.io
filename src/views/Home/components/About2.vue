<template>
  <div>
    <section class="about hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Meet Arifin</h1>
        </div>
      </div>
    </section>
    <section style="padding-bottom: 100px">
      <div class="container is-fluid">
        <h1 class="title has-text-centered" style="padding: 40px">
          What I Bring
        </h1>
        <div class="columns" style="padding: 0 10% 0 10%">
          <div class="column">
            <CardAbout
              title="Back End Focus"
              hCard="300px"
              body="Focused on building server with REST API, message queueing (MQTT), and GraphQL."
            ></CardAbout>
          </div>
          <div class="column">
            <CardAbout
              title="Full Stack Experience"
              hCard="300px"
              body="Experience doing project across the application stack using Node.js, MongoDB, SQL, frontend framework (Vue, Angular, React), Kubernetes, and Heroku to deliver production applications from design to deployment."
            ></CardAbout>
          </div>
          <div class="column">
            <CardAbout
              title="Deep Learning Skill"
              hCard="300px"
              body="Experience building deep learning model with Python and Pytorch such as ANN, CNN, and RNN."
            ></CardAbout>
          </div>
        </div>
      </div>
    </section>
    <section class="about hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Where I Come From</h1>
          <h5
            class="has-text-justified is-size-6"
            style="padding: 20px 10% 20px 10%"
          >
            I come from Indonesia and I have graduated from bachelor of
            electrical engineering in 2019. Software is my passion and I have
            built several projects about Internet of Things, Web App, Mobile
            App, Machine Leaning Model, and many more.
          </h5>
        </div>
      </div>
    </section>
    <section>
      <div class="container is-fluid">
        <h1 class="title has-text-centered" style="padding: 40px">
          Technologies That I've Worked With
        </h1>
        <div class="columns" style="padding: 0 10% 0 10%">
          <div class="column">
            <CardAbout
              title="Vue"
              hCard="400px"
              center="center"
              body="Full production applications written in Vue"
              imgShow="true"
              srcImg="/logo-vue.png"
            ></CardAbout>
          </div>
          <div class="column">
            <CardAbout
              title="JavaScript"
              hCard="400px"
              center="center"
              body="Proficient in ES6 and ES5 JS"
              imgShow="true"
              srcImg="/logo-js.png"
            ></CardAbout>
          </div>
          <div class="column">
            <CardAbout
              title="Node.js"
              hCard="400px"
              center="center"
              body="Back-ends written using Node and Express"
              imgShow="true"
              srcImg="/logo-node.png"
            ></CardAbout>
          </div>
          <div class="column">
            <CardAbout
              title="PostgreSQL"
              hCard="400px"
              center="center"
              body="Apps using SQL Database (PostgreSQL)"
              imgShow="true"
              srcImg="/logo-postgre.png"
            ></CardAbout>
          </div>
        </div>
        <h1 class="has-text-centered is-size-4" style="padding: 40px">
          Python • Pytorch • React • Angular • MongoDB • GraphQL • MQTT • Web
          Component • REST API • Socket Io
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import CardAbout from '@/components/CardAbout.vue';

export default {
  name: 'About2',
  components: {
    CardAbout
  }
};
</script>

<style></style>
