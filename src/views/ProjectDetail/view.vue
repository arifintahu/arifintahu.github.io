<template>
  <div>
    <section class="about hero is-primary is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-3">Project {{ project.title }}</h1>
          <h1 class="subtitle is-size-4">Project {{ project.subtitle }}</h1>
        </div>
      </div>
    </section>
    <section style="margin-top: 40px; padding: 0 5% 5% 5%">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-two-thirds">
            <div class="goals" style="padding-bottom: 5%">
              <h1 class="is-size-3">Goals</h1>
              <hr style="margin-top: 0.2rem" />
              <ul style="list-style-type: square">
                <li v-for="item in project.goals" :key="item.id">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="tools" style="padding-bottom: 5%">
              <h1 class="is-size-3">Tools</h1>
              <hr style="margin-top: 0.2rem" />
              <ul style="list-style-type: square">
                <li v-for="item in project.tools" :key="item.id">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="how" style="padding-bottom: 5%">
              <h1 class="is-size-3">How It Works</h1>
              <hr style="margin-top: 0.2rem" />
              <p>{{ project.how }}</p>
            </div>
          </div>
          <div class="column">
            <figure class="image is-square">
              <img :src="project.src" alt="Placeholder image" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

function getFile(file, callback) {
  readTextFile(file, function (text) {
    console.log(text);
    return callback(JSON.parse(text));
  });
}

export default {
  name: 'ProjectDetail',
  props: ['index', 'view'],
  data: function () {
    return {
      project: ''
    };
  },
  methods: {
    getData: function (file, index, view) {
      return new Promise((resolve) => {
        getFile(file, function (response) {
          resolve(response.data[index][view]);
        });
      });
    }
  },
  mounted: function () {
    this.getData('../project.json', this.index, this.view).then((data) => {
      console.log(data);
      this.project = data;
    });
  }
};
</script>
