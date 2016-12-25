<template>
  <section>
      <textarea type="text" placeholder="Enter your text here..." class="input-text" name="composeEmail" />
  </section>
</template>
<script>

  export default {
    props: {
    },
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
.single_email_wrapper1{
  box-shadow: 0 1px 5px #000000;
  border-radius: 3px;
  padding: 3px;
}

.input-text{
  min-width: 370px;
  margin: 4px;
  /*display: block;*/
  /*width: 100%;*/
  min-height: 300px;
}
</style>