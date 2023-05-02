<template>
  <div>
    <About id="about" />
    <Experience id="experience" />
    <Project id="project" />
    <Article id="article" />
    <Contact id="contact" />
  </div>
</template>

<script>
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import Article from './components/Article.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'Home',
  components: {
    About,
    Experience,
    Project,
    Article,
    Contact
  }
};
</script>
