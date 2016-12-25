<template>
<section>

    <br clear="all" />
    <div class="evento_card">
      <!--$emit('showDetails', currEvent.id)-->
      <!--{{events[1].venue.lat}}-->
      <div class="evento_title">
        {{currEvent.name}}
        <div @click="goBack" class="evento_close" title="Close event">X</div>
      </div>
      
      <div @click="editEvent" class="evento_edit">Edit</div>
      <div class="evento_save">Save</div>

      <div class="evento_time"><strong>Event Time:</strong> {{currEvent.time}}</div>
      <div class="evento_status"><strong>Status:</strong> {{currEvent.status}}</div>
      <div class="evento_map">
        <div class="map" ref="map">
        </div>
      </div>
      <br clear="all" />
      <div class="evento_content" v-html="currEvent.description"></div>
      <div class="evento_link"><a v-bind:href="currEvent.link" target="_blank">Link to the event</a></div>
    </div>

</section>
</template>

<script>

  import GoogleMapsLoader from 'google-maps'; 
  GoogleMapsLoader.KEY = 'AIzaSyAxd2T0T6z5e8uWogiOcOO60W0seRC7Sao';

  export default {
    props:{
      // currEvent: {}
      // events: {}
    },
    data() {
      return {
        msg: 'Evento-details',
        currEvent: null,
      }
    },
    methods: {
      loadEvent(eventId) {
          // this.$http.get(`event/${eventId}`)
          //     .then(res => res.json())
          //     .then(event => {this.currEvent = event});
          this.currEvent = 
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
                "lat": 32.106529235839844,
                "lon": 34.83524703979492,
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
            };
      },
      goBack: event => {
        window.history.go(-1);
      },
      editEvent: () => {
        document.querySelector('.evento_card').setAttribute('contenteditable', 'true');
        document.querySelector('.evento_save').style.display = 'block';
        
      }
    },
    computed: {
    },
    components: {},
    created() {
      const eventId = this.$route.params.id;
      this.loadEvent(eventId);
    },
    mounted() {
        var checkCoordinates = this.currEvent.venue.lat;

        if(!checkCoordinates) {
          alert('No coordinates to the event');
          document.querySelector('.map').style.display = 'none';
          return;
        }
        var eventoCoordinates = {lat: this.currEvent.venue.lat, lng: this.currEvent.venue.lon};
        // var eventoCoordinates = {lat: 32.106529235839844, lng: 34.83524703979492};
        const options = {
                            zoom: 14,
                            center: eventoCoordinates
                        };
        GoogleMapsLoader.load(google => {
            const map = new google.maps.Map(this.$refs.map, options);
            new google.maps.Marker({
                    map: map,
                    position: eventoCoordinates
                });
        });





    }
  }


</script>

<style>
  /* Always set the map height explicitly to define the size of the div
    * element that contains the map. */
  .map {
    height: 200px;
    width: 400px;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .evento_map{
    background: lightblue;
    float: right;
    margin: -20px 20px 0 20px ;
  }

  .evento_card {
    /*width: 100%;*/
    /*height: 400px;*/
    background: lightgrey;
    overflow: hidden;
    padding: 7px;
    margin: 10px 15px 10px 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 5px #000000;
  }
    .evento_title {
    font-size: 22px;
    color: #000000;
    margin: 10px 0;
    overflow: hidden;
    border-bottom: solid 1px grey;
  }
  
  .evento_close{
    float: right;
    color:green;
    cursor:pointer;
  }

  .evento_time, .evento_status{
    font-size: 18px;
    float: left;
    clear: both;
  }
  .evento_content{
    margin: 10px 0 0 0;
    font-size: 16px;
  }

  .evento_content img {
    max-height: 200px;
    border: solid 1px green;
    margin-left: 7%;
  }
  
  .evento_edit {
    width: 20%;
    background: lightblue;
    text-align: center;
    line-height: 32px;
    margin: 2px 25px 10px 0;
    float: left;
    border-radius: 3px;
    border: solid 1px grey;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 1px 2px 5px #000000;
  }
  
  
  .evento_edit:hover, .evento_save:hover {
    background: #0b5b75;
    color: #ffffff;
    box-shadow: inset 0 0 8px #ffffff;
  }
  
  .evento_save {
    display: none;
    width: 20%;
    background: lightgreen;
    text-align: center;
    line-height: 32px;
    margin: 2px 25px 10px 0;
    float: right;
    border-radius: 3px;
    border: solid 1px grey;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 1px 2px 5px #000000;
  }

  .evento_link {
    margin: 16px 7px 0 0;
    float: right;
    font-size: 20px;
  }
  .border{border: solid 1px red;}
</style>