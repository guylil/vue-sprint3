<template>
  
  <section>
    <br />
    <!-- selectedEmail is an empty object at first view of the page -->
    <!-- show content if the pbject has value (selected-email) -->
    <div v-show="selectedEmail.from" class="single_email_wrapper"
         >
      <div><span class="caption">From:</span> {{selectedEmail.from}}</div>
      <div><span class="caption">Subject:</span> {{selectedEmail.subject}}</div>
      <div>{{selectedEmail.body}}</div>
    </div>
  </section>

</template>

<script>
    
  export default {
    props:{
      selectedEmail:{}
    },
    data() {
      return {
      }
    },
    methods: {
      
    },
    computed: {},
    components: {
    }
  }


</script>

<style scoped>
.single_email_wrapper{
  min-width: 370px;
  box-shadow: 0 1px 5px #000000;
  border-radius: 3px;
  padding: 3px;
}

.single_email_wrapper > DIV{
  padding: 4px 0;
}

.border{border: solid 1px green;}

</style>