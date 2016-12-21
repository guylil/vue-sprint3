<template>
<section>

    <h2>email-status: Total Emails: {{emails.length}}</h2>

    <hr>
</section>
</template>

<script>
    
  export default {
    props:{emails: {}
    },
    data() {
      return {
        msg: 'Hello-email-FILTER'
      }
    },
    methods: {},
    computed: {},
    components: {
    }
  }


</script>

<style scoped>
</style>