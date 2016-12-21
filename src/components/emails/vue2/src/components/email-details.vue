<template>
<section>

    <h2>email-details</h2>
    <section>This is the selected email: {{selectedEmail}}</section>
    <hr>
</section>
</template>

<script>
    
  export default {
    props:{selectedEmail:{}},
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
</style>