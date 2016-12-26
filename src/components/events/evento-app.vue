<template>
<section>

    <h2>{{msg}}</h2>
    <evento-filter></evento-filter>
    <evento-list id="elEventoList" :events="events" style="display: block;"></evento-list>
    <!--<br clear="all" />
    <evento-details id="elEventoDetails" :events="events" style="display: block;"></evento-details>-->

    <br />

    
</section>
</template>

<script>
  import EventoFilter   from './evento-filter.vue'
  import EventoList     from './evento-list.vue'
  import EventoDetails  from './evento-details.vue'
  // import data           from '../../assets/data/EventsRecommended.js'

  // var data = require('../../assets/data/EventsRecommended.js');

  export default {
    // props:{
    // },
    data() {
      return {
        msg: 'Evento-app',
        events: []
      }
    },
    methods: {
      reloadEvents() {
        this.$http.get('events')
          .then(res => res.json())
          .then(events => this.events = events);
      }

    },
    computed: {},
    components: {
      'evento-filter': EventoFilter,
      'evento-list': EventoList,
      'evento-details': EventoDetails
    },
    created(){
      this.reloadEvents();
    } 
  }


</script>

<style scoped>
</style>