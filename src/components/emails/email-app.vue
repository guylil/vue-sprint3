<template>
  <section class="emails-main">
    <h2 class="text-center">emails-app</h2>
    <div class="btn-group flex space-around" role="group">
      <button type="button" class="btn btn-success" @click="toggleActive">{{this.compose}}</button>
      <!--<router-link to="/email/compose">Compose</router-link>
      <button type="button" class="btn btn-info">Delete</button>
      <button type="button" class="btn btn-warning">Forward</button>
      <button type="button" class="btn btn-danger">Replay</button>-->
    </div>
    <div class="emails-main-container">
      <email-list :emails="emails" @openEmail="selectEmail" v-bind:class="{ active : isActive }" @deleteEmail="deleteEmail"></email-list>
      <div>
        <email-details v-bind:class="{ active : isActive }" :selectedEmail="selectedEmail"></email-details>
        <email-compose v-bind:class="{ active : !isActive }" @sendEmail=""></email-compose>
      </div>
    </div>
    <email-status :emails="emails"></email-status>
  </section>
</template>

<script>
  import EmailList from './email-list.vue'
  import EmailDetails from './email-details.vue'
  import EmailCompose from './email-compose.vue'
  import EmailStatus from './email-status.vue'

  export default {

    data() {
      return {
        compose: 'Compose',
        isActive: false,
        emails: [],
        // emails: [
        //   { id: 1, subject: 'hi from codingAcademy', from: 'Yaron', body: '111', isRead: false },
        //   { id: 2, subject: 'hello', from: 'Neta', body: '222', isRead: false },
        //   { id: 3, subject: 'CodingAcademy Rulzz', from: 'Dor', body: '333', isRead: false },
        //   { id: 4, subject: 'CodingAcademy Ruls test test test test test test test test test test test ', from: 'Puki', body: '444', isRead: false }
        // ],

        selectedEmail: {} //// TO DO - PUT A var w/ default email
        //id: 10, subject: 'CodingAcademy', from: 'Yaron', body: '111', isRead: false 
      }
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive
        if (this.isActive) { this.compose = 'Back' }
        else { this.compose = 'Compose' }
        this.reloadEmails()
      },
      selectEmail(emailId) {
        // this.$router.push(`/emails/${emailId}`)
        this.selectedEmail = this.emails.filter((email) => { return (email.id === emailId) })[0];
        // change read status
        this.selectedEmail.isRead = true;
        // console.log(this.selectedEmail.isRead); //expected false
        // (!this.selectedEmail.isRead) ? this.selectedEmail.isRead = true : this.selectedEmail.isRead;
        // console.log(this.selectedEmail.isRead); // //expected true
        this.$http.put(`emails/${this.selectedEmail.id}`, this.selectedEmail)
      },
      reloadEmails() {
        this.$http.get('emails')
          .then(res => res.json())
          .then(emails => this.emails = emails);
      },
      deleteEmail(emailId) {
        console.log('email.app', emailId);
        this.$http.delete(`emails/${emailId}`);
        this.reloadEmails();
        // this.emails.filter((email) => { (email.id === emailId) ? false : true });
        // this.$router.push(`emails/`);
      }
    },
    computed: {},
    mounted() {
      this.compose = 'Compose'
      //this.selectedEmail = this.emails.filter((email) => { return (email.id === 1) });
    },
    created() {
      this.reloadEmails();
    },
    components: {
      'email-list': EmailList,
      'email-details': EmailDetails,
      'email-status': EmailStatus,
      EmailCompose,
    }
  }


</script>

<style scoped>
.active{
  display: none;
}
.caption {
    color: blueviolet;
}

.border {
    border: solid 1px red;
}
.emails-main{
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    border: 4px solid lightgray;
  
}
.emails-main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: lightslategray;
    border-color: #e7e7e7;
    border: 4px solid lightgray;
    
}
.flex{
  display: flex;
}
.space-around{
  padding: 2px;
  justify-content: space-around;
}
</style>