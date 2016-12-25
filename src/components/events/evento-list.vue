<template>
  <section>

    {{msg}}
    <br />
    <div v-for="(currEvent, idx) in events" class="______evento_flex">
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
    </div>


  </section>
</template>

<script>
  import EventoDetails from './evento-details.vue'

  export default {
    props: {
      events: {}
    },
    data() {
      return {
        msg: 'Evento-list'
      }
    },
    methods: {
        // this.$emit('alertMe', this.item.id)
    },
    computed: {},
    components: {
      'evento-details': EventoDetails
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
    height: 400px;
    min-height: 400px;
    max-height: 400px;
    background: lightgrey;
    overflow: hidden;
    padding: 7px;
    margin: 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 5px #000000;
  }
  
  .evento_title {
    font-size: 22px;
    color: #23527c;
    cursor: pointer;
    margin: 10px 0;
    height: 102px;
    overflow: hidden;
    border-bottom: solid 1px grey;
  }
  
  .evento_title:hover {
    text-decoration: underline;
  }
  
  .evento_content {
    max-height: 180px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 6px 0 5px 0;
  }
  
  .evento_content img {
    width: 100%;
    border: solid 1px green;
  }
  
  .evento_edit {
    width: 100px;
    background: lightblue;
    text-align: center;
    line-height: 20px;
    margin: 10px 25px 0 0;
    float: left;
    border-radius: 3px;
    border: solid 1px grey;
    cursor: pointer;
  }
  
  .evento_edit:hover {
    background: #0b5b75;
    color: #ffffff;
  }
  
  .evento_link {
    margin: 10px 7px 0 0;
    float: right;
  }
</style>