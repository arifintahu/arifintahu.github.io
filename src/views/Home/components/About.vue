<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title has-text-dark">About Me</div>
        <hr class="border-line has-background-dark" />
        <div class="content">
          <div class="content-item has-text-left">
            <h3 class="item-title">Front-end Skills</h3>
            <hr class="item-divider has-background-dark" />
            <div class="item-skill">
              <h5 class="skill-title">Web Application Developer</h5>
              <div class="skill-detail">
                <ul>
                  <li>
                    Working on developing a scalable api for an IOS and Android
                    App together with a team of 4.
                  </li>
                  <li>
                    Implementing a real time Chat Microservice using WebSockets
                    with Socket.IO and a MongoDB database to store messages
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content-item has-text-left">
            <h3 class="item-company">Back-end Skills</h3>
            <hr class="item-divider has-background-dark" />
            <div class="item-skill">
              <h5 class="skill-title">Web Application Developer</h5>
              <div class="skill-detail">
                <ul>
                  <li>
                    Working on developing a scalable api for an IOS and Android
                    App together with a team of 4.
                  </li>
                  <li>
                    Implementing a real time Chat Microservice using WebSockets
                    with Socket.IO and a MongoDB database to store messages
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
export default {
  name: 'About'
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
  gap: 50px;
}
.content .content-item {
  max-width: 400px;
}
.content-item .item-divider {
  height: 1px;
  width: 100%;
  margin: 12px 0;
}
</style>
