<template>
  <section> THIS IS Emails List

    <ul>
      <li v-for="(currEmail, idx) in emails">
        <email-preview :item="currEmail" 
                        @openItem="$emit('openEmail',currEmail.id)">

        </email-preview>

      </li>
    </ul>
    <hr>
  </section>
</template>

<script>
  import EmailPreview from './email-preview.vue'
  export default {
    props:{emails:{}
    },
    data() {
      return {
      }
    },
    methods: {

    },
    computed: {},
    components: {
      'email-preview': EmailPreview
    }
  }


</script>

<style scoped>
ul{
  list-style-type: none;
  background-color: lightblue;
  cursor: pointer;
}

</style>