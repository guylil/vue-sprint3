<!--Here I tryied to treat an Eamil as an Item-->
<template>
  <section @click="openItem" >
    <div class="flex">
      <div class="border">
        kdfgdf gdfg g jhfkutd
      </div>
      <div class="border nowrap">
        fld der
      </div>
    </div>
  </section>

  <!--<section @click="openItem" class="flex">
  <div class="flex">
      <div class="border">
        email_ID:{{item.id}}<br> {{item.subject}}
        <br>
        {{item.body}}<br>
        Sender: <strong> {{item.from}}</strong> <br>
      </div>
      <div>
        flag and bar
      </div>
      <hr>
  </div>
  </section>-->
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
        this.$emit('openItem', { itemId: this.item.id })
      }
    },
    computed: {},
    components: {
    }
  }


</script>

<style scoped>
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