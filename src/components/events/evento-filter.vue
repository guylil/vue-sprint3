<template>
  <section>

    Filter component
    <br />
    <input placeholder="Enter your search" />
    
  </section>
</template>

<script>
    
  export default {
    props:{
      emails: {}
    },
    data() {
      return {
        msg: 'Evento-filter'
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