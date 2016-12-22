<template>
  <section>

    {{msg}}
    <br />
    <!--{{events}}-->
    <div v-for="(currEvent, idx) in events" class="_______evento_flex">
      <!--<email-preview :item="currEvent" @openItem="$emit('openEmail', $event)">-->
      <div class="evento_card">
        <div class="evento_title">{{currEvent.name}}</div>
        <div><strong>Event Time:</strong> {{currEvent.time}}</div>
        <div><a v-bind:href="currEvent.link" target="_blank">Link to the event</a></div>
        <div class="evento_content" v-html="currEvent.description"></div>
      </div>
    </div>


  </section>
</template>

<script>
    
  export default {
    props: {
      events: {}
    },
    data() {
      return {
        msg: 'Evento-list'
      }
    },
    methods: {},
    computed: {},
    components: {
    }
  }


</script>

<style scoped>
  .border {
    border: solid 1px red;
  }
  
  .evento_flex {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .evento_card {
    float: left;
    width: 300px;
    min-width: 200px;
    max-width: 30%;
    background: lightgrey;
    overflow: hidden;
    padding: 7px;
    margin: 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 5px #000000;
  }

  .evento_title{
    font-size: 24px;  
    margin: 10px 0;
  }

  .evento_content{

  }
  .evento_content {
    width: 100%;
    border: solid 1px green;
  }

</style>