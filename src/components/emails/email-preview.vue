
<!--Here I tryied to treat an Eamil as an Item-->
<template>
  <div class="emails_head" @click="$emit('openItem', item.id)" :style="(item.isRead) ? 'font-weight: normal' : 'font-weight: bold'">
    <span class="caption">Subject:</span> {{item.subject}} 
    <span class="caption">Sender:</span> {{item.from}}
  </div>
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
      // openItem(){
      //   this.$emit('openItem', this.item.id)
      // }
    },
    computed: {},
    components: {
    }
  }


</script>

<style scoped>
.emails_head{
  border-bottom: solid 1px silver;
  padding: 5px 0;
}
</style>