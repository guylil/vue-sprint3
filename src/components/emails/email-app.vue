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
        msg: 'Hello-main-email',
        emails: [{ id: 1, subject: 'hi from codingAcademy', from: 'Yaron', body: '111', isRead: false },
        { id: 2, subject: 'hello', from: 'Neta', body: '222', isRead: false },
        { id: 3, subject: 'CodingAcademy Rulzz', from: 'Dor', body: '333', isRead: false }
        ],
        selectedEmail: { id: 10, subject: 'CodingAcademy', from: 'Yaron', body: '111', isRead: false }
      }
    },
    methods: {
      selectEmail(emailId) {
        console.log('Email id selected: ', emailId);
        this.selectedEmail = this.emails.filter((email) => { return (email.id === emailId) });
// TODO CHANGE READ STATUS
      }
    },
    computed: {},
    mounted() {
      this.selectedEmail = this.emails.filter((email) => { return (email.id === 1) });
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
</style>