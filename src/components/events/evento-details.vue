<template>
<section>

    <br clear="all" />
    <div class="evento_card">
      <!--$emit('showDetails', currEvent.id)-->
      <!--{{events[1].venue.lat}}-->
      <div class="evento_title">{{currEvent.name}}
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
          this.$http.get(`event/${eventId}`)
              .then(res => res.json())
              .then(event => {this.currEvent = event});
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
    font-weight: bold;
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