<template>
  <section> THIS IS Emails List

    <ul class="emails_list">
      <li v-for="(currEmail, idx) in emails">
        <email-preview :item="currEmail" 
                        @openItem="$emit('openEmail', $event)">
        </email-preview>
      </li>
    </ul>
  </section>
</template>

<script>
  import EmailPreview from './email-preview.vue'
  export default {
    props:{
      emails:{}
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
.emails_list{
  list-style-type: none;
  background-color: lightblue;
  padding: 10px 6px;
}
.emails_list > LI{
  cursor: pointer;
  margin: 3px;
}
</style>