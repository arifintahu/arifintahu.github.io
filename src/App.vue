<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Built by Miftahul Arifin.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  name: 'App'
};
</script>

<style>
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
