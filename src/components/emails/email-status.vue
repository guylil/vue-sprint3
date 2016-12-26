<template>
  <section>
    <div class="border">
      Emails reading status: {{statusState.left}}

      <div class="progress active">
        <div class="progress-bar" style="width:0%; line-height:22px;" :style="{width: statusState.left/statusState.all*10+'%'}"> {{statusState.all}}
</div>

</div>

</div>

</section>
</template>

<script>

  export default {
    props: {
      emails: {}
    },
    data() {
      return {
        statusState: { all: 0, read: 0, left: 0 }

      }
    },
    methods: {
      setVars() {
        console.log('emails length:', this.emails.length)
        this.statusState.all = this.emails.length
        this.statusState.read = 3
        this.statusState.left = this.statusState.all - this.statusState.read
      }
    },
    computed: {

    },
    components: {
    },
    created() {
      this.setVars()
    },
    mounted() {
    }
  }


</script>

<style scoped>
  .progress {
    margin: 6px 0;
  }
</style>