<template>
  <section>
          
      <div class="evento_card">
        <router-link :to="{ path: '/event/' + currEvent.id}">
          <div class="evento_title">{{currEvent.name}}</div>
        </router-link>

        <div><strong>Event Time:</strong> {{currEvent.time}}</div>
        <div><strong>Status:</strong> {{currEvent.status}}</div>
        <div class="evento_content" v-html="currEvent.description"></div>
        <div class="evento_edit">Edit</div>
        <div class="evento_link"><a v-bind:href="currEvent.link" target="_blank">Link to the event</a></div>
      </div>

  </section>
</template>


<script>
  export default {
    props: {
      currEvent: {
        required: true
      }
    },
    data() {
      return {
        msg: 'EVENTS Preview'
      }
    },
    methods: {},
    computed: {},
    components: {}
  }


</script>
