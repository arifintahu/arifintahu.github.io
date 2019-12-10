<template>
  <div>
    <Home id="home"></Home>
    <About id="about"></About>
    <Project id="projects"></Project>
    <Contact id="contact"></Contact>
  </div>
</template>

<script>
import Home from './home.vue'
import About from './about.vue'
import Project from './project.vue'
import Contact from './contact.vue'

export default {
  name: 'Portofolio',
  components: {
    Home,
    About,
    Project,
    Contact
  }
};
</script>