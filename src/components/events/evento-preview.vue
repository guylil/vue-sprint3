<template>
<section>

    <h2>{{msg}}</h2>

    <hr>
</section>
</template>

<script>
    
  export default {
    props:{emails: {}
    },
    data() {
      return {
        msg: 'Evento-preview'
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