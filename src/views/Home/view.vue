<template>
  <div>
    <Greeting id="home" />
    <Experience id="experience" />
    <Project id="project" />
    <About id="about" />
    <Article id="article" />
    <Contact id="contact" />
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import About from './components/About.vue';
import Article from './components/Article.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'Home',
  components: {
    Greeting,
    Experience,
    Project,
    About,
    Article,
    Contact
  }
};
</script>
