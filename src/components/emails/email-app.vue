<template>
  <section>

    <h2>emails-main</h2>
    <div class="container">
      <email-list :emails="emails" @openEmail="selectEmail">
      </email-list>
      <email-details :selectedEmail="selectedEmail"></email-details>
      <email-status :emails="emails"></email-status>
    </div>

  </section>
</template>

<script>
  import EmailList from './email-list.vue'
  import EmailDetails from './email-details.vue'
  import EmailStatus from './email-status.vue'

  export default {

    data() {
      return {
        msg: 'Lorem Ipsum',
        emails: [
            { id: 1, subject: 'hi from codingAcademy', from: 'Yaron', body: '111', isRead: false },
            { id: 2, subject: 'hello', from: 'Neta', body: '222', isRead: false },
            { id: 3, subject: 'bla bla Rulzz', from: 'Dor', body: '333', isRead: false }
        ],
        selectedEmail: {}
        //id: 10, subject: 'CodingAcademy', from: 'Yaron', body: '111', isRead: false 
      }
    },
    methods: {
      selectEmail(emailId) {
          this.selectedEmail = this.emails.filter((email) => { return (email.id === emailId) })[0];
          // change read status
          this.selectedEmail.isRead = true;
          // console.log('Email id selected: ', this.selectedEmail);
      }
    },
    computed: {},
    mounted() {
      //this.selectedEmail = this.emails.filter((email) => { return (email.id === 1) });
    },
    components: {
      'email-list': EmailList,
      'email-details': EmailDetails,
      'email-status': EmailStatus
    }
  }


</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}

.caption {
    color: blueviolet;
}

.border {
    border: solid 1px red;
}
</style>