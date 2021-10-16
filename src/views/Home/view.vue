<template>
  <div>
    <Greeting id="greeting" />
    <About id="about" />
    <Project id="project" />
    <Contact id="contact" />
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'Home',
  components: {
    Greeting,
    About,
    Project,
    Contact
  }
};
</script>
