
<!--Here I tryied to treat an Eamil as an Item-->
<template>
  <section @click="openItem" >
    Subject: {{item.subject}} 
    Sender: <strong> {{item.from}}</strong>
    email_ID:{{item.id}}
    <hr>
  </section>
</template>

<script>

  export default {
    props: {
      item: {
        required: true
      }
    },
    data() {
      return {
        msg: 'Hello-EmailPreview'
      }
    },
    methods: {
      openItem(){
        this.$emit('openItem',{itemId: this.item.id})
      }
    },
    computed: {},
    components: {
    }
  }


</script>

<style scoped>
</style>