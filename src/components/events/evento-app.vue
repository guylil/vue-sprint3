<template>
<section>

    <h2>{{msg}}</h2>
    <evento-filter></evento-filter>
    <evento-list id="elEventoList" :events="events" style="display: block;"></evento-list>
    <!--<br clear="all" />
    <evento-details id="elEventoDetails" :events="events" style="display: block;"></evento-details>-->

    <br />

    
</section>
</template>

<script>
  import EventoFilter from './evento-filter.vue'
  import EventoList   from './evento-list.vue'
  import EventoDetails   from './evento-details.vue'

  // var data = require('./src/assets/data/EventsRecommended.js');
  var data = 
  [
    {
      "created": 1480840809000,
      "id": "236018920",
      "name": "Hack the future of Japanese Stars! [SUBARU Pre-Hac Event] - Free Event",
      "rsvp_limit": 140,
      "status": "upcoming",
      "time": 1482337800000,
      "updated": 1482304553000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 122,
      "venue": {
        "id": 21632102,
        "name": "Samurai House in Israel",
        "lat": 0,
        "lon": 0,
        "repinned": false,
        "address_1": "2F,Nahalat Binyamin St 52",
        "city": "Tel Aviv-Yafo",
        "country": "il",
        "localized_country_name": "Israel"
      },
      "group": {
        "created": 1407124248000,
        "name": "Samurai House in Israel",
        "id": 16172912,
        "join_mode": "open",
        "lat": 32.06999969482422,
        "lon": 34.77000045776367,
        "urlname": "Samurai-House-in-Israel",
        "who": "samurais"
      },
      "link": "https://www.meetup.com/Samurai-House-in-Israel/events/236018920/",
      "description": "<p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/3/c/3/4/600_456615412.jpeg\" /></p> <p>\n\n\n<b>If you're futuristic geek that loves technology, designer, and car lover then we are looking for you!<br/>Build an idea for the future of cars, test it with SUBARU R&D mentors and win a flight to Japan!</b></p> <p><b>The meetup will explain the purpose of the hackathon by SUBARU guys!<br/></b><br/><b>About SUBARU:</b></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/7/e/9/5/600_456572405.jpeg\" /></p> <p>Subaru is the automotive division of Fuji Heavy Industries Ltd.(FHI), a multifaceted transport equipment manufacturer active on the global stage under three key pillars: Subaru Automobile Business; Aerospace Company; Industrial Products company Since the Subaru 360 was released in 1958, Subaru has been consistently aiming to produce vehicles that offer high safety in all road conditions, excellent driving performance, and intelligent packaging. This concept is applied to each and every vehicle that Subaru produces. Subaru's symmetrical All Wheel Drive (AWD) was developed as an extension of this concept. And the powertrain has been designed to be perfectly symmetrical left and right with the compact, low center of gravity Horizontally-Opposed Engine (SUBARU BOXER) at its heart. Subaru believes that these technologies enable owners to control their vehicles exactly as they intend to, and it is this level of ideal performance that Subaru is striving for. And this is backed with reliable driving performance in any weather and road conditions. Driving safety is also fine-tuned to exceptional levels together with crash safety and prevention safety.</p> <p><br/><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/7/e/b/4/600_456572436.jpeg\" /></p> <p><a href=\"http://www.subaru-global.com/technology/safety/preventivesafety.html\"><a href=\"http://www.subaru-global.com/technology/safety/preventivesafety.html\" class=\"linkified\">http://www.subaru-global.com/technology/safety/preventivesafety.html</a></a></p> <p><b><br/></b></p> <p><b>Meetup Agenda:</b></p> <p>• <b>18:30 - 19:00 Reception </b></p> <p>• <b>19:00 - 19:10 Samurai Intro</b></p> <p>• <b>19:00-20:00 SUBARU hackathon info </b></p> <p>• <b>20:00-20:15 Q&A</b></p> <p>• <b>20:15-20:45 Networking with Pizza & Beer!</b></p> <p><b>January 31th - February 1st 2017  [Hackathon Details]:</b></p> <p>The event will focus on what will be the future of cars 25 years from now in the next fields:<br/>>>> Innovation Safety - New ideas are welcome.<br/>>>> Accumulation of data - how to use data for the benefit of the driver in the future.<br/>>>> Hack Future of eyesight - How to utilize the current SUBARU technology to 25 years from now.</p> <p>When:<br/>January 31th- February 1st, 2017</p> <p>Who can apply:<br/>If you futuristic geek that loves technology, designer, and car lover then we are looking for you!<br/>Only teams can sign up and should include no less than 2 and no more than 5 members.<br/>Teams with designers or organic startups/teams will have more chances to get on board! Teams:<br/>We are looking for 15 talented team (application can be as an organic team or as a startup) that will combine new innovative ideas with the company's electronic sensors that will be presented in the announcement event.</p> <p>Apply here:</p> <p><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfh_qP8w_78MRz4EEzaEmxdW9o7K_Cu4lF4DRceOvhraPjsBg/viewform\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfh_qP8w_78MRz4EEzaEmxdW9o7K_Cu4lF4DRceOvhraPjsBg/viewform\" class=\"linkified\">https://docs.google.com/forms/d/e/1FAIpQLSfh_qP8w_78MRz4EEzaEmxdW9o7K_Cu4lF4DRceOvhraPjsBg/viewform</a></a></p> <p>Prize:<br/>The winning team will win a flight to Tokyo, Japan and will meet with SUBARU management to explore new directions for future cooperation. Support:<br/>During the event SUBARU's engineers and the judgment team will be of help and guide you.</p> <p>Place:<br/>Rise, Tel-Aviv<br/><a href=\"https://www.google.com/maps/place/Rise+Tel+Aviv/@32.0647189,34.7721668,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b7d6123e697:0x645fed6027fb8464!8m2!3d32.0647144!4d34.7743555\" class=\"linkified\">https://www.google.com/maps/place/Rise+Tel+Aviv/@32.0647189,34.7721668,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b7d6123e697:0x645fed6027fb8464!8m2!3d32.0647144!4d34.7743555</a></p> ",
      "visibility": "public"
    },
    {
      "created": 1478090304000,
      "duration": 9000000,
      "id": "235292442",
      "name": "Cassandra and Scylla Real Life Experience by Kenshoo & MyHeritage  ",
      "status": "upcoming",
      "time": 1482336000000,
      "updated": 1479054296000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 131,
      "venue": {
        "id": 4761372,
        "name": "Kenshoo",
        "lat": 32.106529235839844,
        "lon": 34.83524703979492,
        "repinned": false,
        "address_1": "HaBarzel 6",
        "city": "Tel Aviv-Yafo",
        "country": "il",
        "localized_country_name": "Israel"
      },
      "group": {
        "created": 1456749346000,
        "name": "Tech-Talk-Teach",
        "id": 19641607,
        "join_mode": "open",
        "lat": 32.06999969482422,
        "lon": 34.77000045776367,
        "urlname": "Tech-Talk-Teach",
        "who": "Members"
      },
      "link": "https://www.meetup.com/Tech-Talk-Teach/events/235292442/",
      "manual_attendance_count": 0,
      "description": "<p><b>Agenda: </b><br/>18:00 – 18:30- Gathering (food and drinks)<br/>18:30 – 19:15- Scylla and Cassandra at Kenshoo- Noam Hasson, Big Data Team Leader @ Kneshoo<br/>19:30-20:15- PeopleStore - blazing fast 2.5 billion profiles storage- Ran Peled, Chief Architect @MyHeritage</p> <p>\n\n<b>\"Scylla and Cassandra at Kenshoo\"</b></p> <p><b>Abstract: </b><br/>Kenshoo is the industry leader in digital marketing and has run Cassandra for quite some time now. The Kenshoo team was interested in Scylla not just due to performance but for ease of administration. It is important to be able to run all of the background operations a sophisticated database keeps under the hood. Kenshoo engineer Noam Hasson demonstrates the speed of compaction and repair of Scylla verse Cassandra. Eventually Noam shows that three Scylla VMs can handle the load of 40 physical Cassandra machines.</p> <p><b>Bio: </b><br/>Noam Hasson has over 12 years of web development experience, and is currently the in-house big data expert at Kenshoo, a global software company that is the sole leader in bid management software and social advertising platforms. Previously, Noam was a web developer with StartApp, a global monetization and advertising mobile network. Prior to that, Noam was a co-founder and CEO of SociaLayer.com, an Israel-based software startup focusing on cutting-edge solutions and web technologies. Earlier in his career, Noam was the CTO of Mekusharim, a leading provider of social networking media solutions.</p> <p><b>\"PeopleStore - blazing fast 2.5 billion profiles storage\"</b></p> <p><b>Abstract: </b><br/>MyHeritage is home to 82 million users with 2.5 billion rich personal profiles in their family trees, stored on complex and highly optimized MySQL infrastructure. As we started encountering scalability and performance issues, we have built a new data store, based on Cassandra, Mesos+Docker, and Hadoop, that is highly scalable and blazing fast. In this meetup we will share the architecture, design considerations and lessons learned. Among the complexities we will cover is the challenge to load the system while data is changing, keeping a MySQL source-of-truth and Cassandra in synch, errors handling and monitoring.</p> <p><b>Bio: </b><br/>Ran Peled is Chief Architect at MyHeritage, with over 30 years of software development experience, and expertise in large-scale Internet applications.</p> ",
      "visibility": "public"
    },
    {
      "created": 1416703426000,
      "id": "xdssclyvqbcc",
      "name": "she codes(tau) - Weekly HackNight",
      "status": "upcoming",
      "time": 1482336000000,
      "updated": 1416703426000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 3,
      "venue": {
        "id": 20681282,
        "name": "Tel Aviv University ",
        "lat": 0,
        "lon": 0,
        "repinned": false,
        "address_1": "Shrieber Building, room # 309",
        "city": "Tel Aviv-Yafo",
        "country": "il",
        "localized_country_name": "Israel"
      },
      "group": {
        "created": 1400061316000,
        "name": "she codes(tau);",
        "id": 14448062,
        "join_mode": "open",
        "lat": 32.06999969482422,
        "lon": 34.77000045776367,
        "urlname": "she-codes-tau",
        "who": "Coders"
      },
      "link": "https://www.meetup.com/she-codes-tau/events/236069406/",
      "description": "<p>Our HackNight is a 3-4 hours freestyle coding session in which developers are invited to work on any coding project they like, or learn a new language, while enjoying the hacking atmosphere, and network with other women developers.</p> <p>\n\n\nBring your laptop, and an idea for a coding project. If you don't have an idea, we will help you choose one. Feel free to work on your school-related projects as well.</p> <p>\n\n\nIf you're just starting off with coding, come, and we'll help you choose tutorials and learn further. Feel free to share with your develop(h)er friends.</p> <p><br/>We can't wait to see you :), don't forget your laptop!</p> <p><br/>**snacks will be available** :D</p> ",
      "visibility": "public"
    },
    {
      "created": 1481805548000,
      "duration": 10800000,
      "id": "236256569",
      "name": "Innovative Scaling Solutions",
      "status": "upcoming",
      "time": 1482336000000,
      "updated": 1482157781000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 125,
      "venue": {
        "id": 23846222,
        "name": "Bitan 26, Namal Tel Aviv",
        "lat": 0,
        "lon": 0,
        "repinned": false,
        "address_1": "Yosef Yakutieli 4, Tel Aviv",
        "city": "Tel Aviv-Yafo",
        "country": "il",
        "localized_country_name": "Israel"
      },
      "group": {
        "created": 1387171943000,
        "name": "Meetups at Wix",
        "id": 11468592,
        "join_mode": "open",
        "lat": 32.06999969482422,
        "lon": 34.77000045776367,
        "urlname": "at-wix",
        "who": "Members"
      },
      "link": "https://www.meetup.com/at-wix/events/236256569/",
      "description": "<p>Israel has been titled as a start up nation, but new startups worldwide are increasing drastically, and more scaling challenges are introduced. These startups, don’t always remain small, as some grow quickly, struggling to hold on to that innovation mentality. There are also large companies that are trying to learn from startups, how to stay relevant in the field.</p> <p>This meetup will discuss the innovative scaling solutions by AWS and Wix and the culture and technologies to support such solutions. Please note the lectures will be given in Hebrew.</p> <p><b>Schedule:</b></p> <p>18:00 - 18:30 - Drinks and food</p> <p>18:30 - 19:15 - Scaling Wix to over 90M users</p> <p>19:15 - 19:30 - Break</p> <p>19:30 - 20:15 - Scaling Your Business in Amazon Style</p> <p>20:15 - More drinks!</p> <p>\n\n\n\n<b>Scaling Wix to over 90M users - Yoav Abrahami<br/></b></p> <p>Over the first 10 years of Wix, Wix infrastructure has gone a number of transformations, starting as a monolithic application server with MySQL, evolving to a service based architecture with with diverse infrastructure. Over this 10 years journey, we have learned a thing or two - some DOs and some DON'Ts.</p> <p>In this presentation I will go over the evolution of Wix architecture, with the different transformations we have done to support Wix at scale. We will share some of our insights about building a web infrastructure for over 90M users</p> <p>Bio:</p> <p>Yoav Abrahami is the Chief Architect at Wix.com, working with developers and operations on building wix future products as well as accelerating and improving development processes. Prior to joining Wix.com, Yoav was an Architect at Amdocs Cramer OSS division. Yoav has a MS in Physics and BS in Computer Science from Tel Aviv University.</p> <p><b>Scaling Your Business in Amazon Style -  Guy Ernest</b></p> <p>In Amazon we are very passionate about helping our customers grow to become the next Amazon, Netflix, IronSource or Waze. We learned so much from our own experience and from the experience of many of our customers, and we love to share this experience with others.</p> <p>We see many small startups that are growing very quickly and struggling to keep the startup (=innovation) mentality. We also see many big companies that are trying to learn from startups how to stay relevant in a competitive market. It is more about agility, independence, smart application, collaboration, and the culture and technologies that can support it.</p> <p>In this lecture, I will share my personal experience and Amazon experience in solving scale problems. Machine learning is one of these scale solutions, and it is also the reason we broken down Amazon to very small two-pizza teams, and the tools that we give to these teams to have superpowers to innovate fast.</p> <p>Bio:</p> <p>Guy Ernest is the Principal Business Development Manager, Machine Learning at AWS. He joined Amazon more than 4 years ago as a solution architect and helped in building the technical team of AWS in Israel. 2 years ago, he moved to Amazon HQ in Seattle to work as a solution architect for Amazon.com, helping one of the largest companies on the planet to use the cloud better. He recently moved to a business development role in one of my passions of machine learning and deep learning, and helping customers to adopt “ML first” strategies.He also spent 25 years in various technical roles in the IDF, in his own startups and some big companies.</p> ",
      "how_to_find_us": "Bitan 26 is located across from Japanika",
      "visibility": "public"
    },
  ]
  export default {
    // props:{
    // },
    data() {
      return {
        msg: 'Evento-app',
        events: data
      }
    },
    methods: {
      ////////////////// Below /////////////////////////
      alertMe(){
        alert('itemId')
      },
      ////////////////// UP ///////////////////
      showDetails(itemId){
        alert('itemId')
        // document.querySelector('elEventoList').style.display = 'none';
        // document.querySelector('elEventoDetails').style.display = 'block';
      }

    },
    computed: {},
    components: {
      'evento-filter': EventoFilter,
      'evento-list': EventoList,
      'evento-details': EventoDetails
    }
  }


</script>

<style scoped>
</style>