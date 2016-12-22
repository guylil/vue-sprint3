<template>
  <section>
    <div class="border">
      Emails reading status: {{emails.length}}

      <div class="progress active">
        <div class="progress-bar" 
              style="width:0%; line-height:22px;" 
              :style="{width: emails.length*10+'%'}">
                {{emails.length}}
        </div>
        
      </div>

    </div>

  </section>
</template>

<script>
    
  export default {
    props:{
      emails: {}
    },
    data() {
      return {
        msg: 'Lorem Ipsum',

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
  .progress {
    margin: 6px 0;
  }
</style>