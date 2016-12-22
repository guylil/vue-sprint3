<!--Here I tryied to treat an Eamil as an Item-->
<template>
  
  <section class="emails_head" 
          @click="openItem" 
          :style="(item.isRead) ? 'font-weight: normal' : 'font-weight: bold'">
    <div class="flex">
      <div>
        <span class="caption">Subject:</span> {{item.subject}} 
        <span class="caption">Sender:</span> {{item.from}}
      </div>
      <div class="border nowrap">
        fld der
      </div>
    </div>
    
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
      openItem() {
        this.$emit('openItem', this.item.id)
      }
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

  .border{border: solid 1px red;}

  .flex{
    display: flex;
    justify-content: space-between;
  }

  .items-container{
  }

  .nowrap{
    white-space: nowrap;
  }

</style>