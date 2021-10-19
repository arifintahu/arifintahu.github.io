<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title has-text-dark">Experience</div>
        <hr class="border-line has-background-dark" />
        <div class="content">
          <div class="content-item has-text-left">
            <h3 class="item-company">PT Elnusa Tbk</h3>
            <hr class="item-divider has-background-dark" />
            <div class="item-job">
              <h5 class="job-title">Web Application Developer</h5>
              <div class="job-period">January 2020 - Present</div>
              <div class="job-skill has-text-weight-light">
                Skills: TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS,
                EC2
              </div>
              <div class="job-activity">
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
            <h3 class="item-company">PT Elnusa Tbk</h3>
            <hr class="item-divider has-background-dark" />
            <div class="item-job">
              <h5 class="job-title">Web Application Developer</h5>
              <div class="job-period">January 2020 - Present</div>
              <div class="job-skill has-text-weight-light">
                Skills: TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS,
                EC2
              </div>
              <div class="job-activity">
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
  name: 'Experience'
};
</script>

<style scoped>
.hero {
  align-items: center;
}
.hero .hero-body {
  max-width: 1000px;
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
  height: 3px;
  width: 100%;
  margin: 12px 0;
}

.item-job .job-title,
.item-job .job-period {
  margin-bottom: 5px;
}
</style>
