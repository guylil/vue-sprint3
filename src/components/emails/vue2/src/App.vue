<template>
  <div id="app">
    <!--<img src="//www.intrawallpaper.com/static/images/cool-background.jpg">-->
    <section>{{ msg }}</section>
    <section>This is from App.vue</section>
    <hr>
    <email-app> </email-app>
</template>

<script>
  import EmailApp from './components/email-app.vue'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome'
      }
    },
    methods: {},
    computed: {},
    components: {
      'email-app': EmailApp
    }
  }
</script>

<style scoped>
#app {
  /*text-align: center;*/
  color: #2c3e50;
  
  background-image: '//www.intrawallpaper.com/static/images/cool-background.jpg';
}

h1, h2 {
  font-weight: normal;
}
</style>