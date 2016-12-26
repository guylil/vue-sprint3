<template>
  <section>
    <textarea v-model="text.subject" @keyup="saveText" placeholder="Subject"></textarea><br>
    <textarea v-model="text.body" @keyup="saveText" placeholder="Enter your text here..."></textarea><br>
    <button @click="send">SEND</button>
  </section>
</template>
<script>

  export default {
    props: {
    },
    data() {
      return {
        text: { subject: '', body: '', from: '' },
        emailMsg: { subject: '', body: '', from: '' },
        compose : ''
      }
    },
    methods: {
      saveText() {
        // console.log(this.text.body)
        this.emailMsg.body = this.text.body;
        this.emailMsg.subject = this.text.subject;
        this.emailMsg.from = 'Me!';
        // console.log(this.text.body);
      },
      send() {
        this.$http.post('emails/', this.emailMsg);
        console.log('email Sent');
      },
      
    }
    ,
    computed: {
      mounted() {
        this.compose = ''
      },
    },
    components: {
    },
  }
</script>

<style scoped>
.autosize-textarea{
  position: relative;
  border: 0;
  padding: 0.1em;
  width: 100%;
  height: 100%;
}


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