<template>
  <section>

    <br clear="all" />
    <div class="evento_card">
      <!--$emit('showDetails', currEvent.id)-->
      <!--{{events[1].venue.lat}}-->
      <div class="evento_title">
        <span id="eventoName" v-on:keyup="changed">{{currEventEdited.name}}</span>
      </div>

      <div @click="goBack" class="evento_close" title="Close event">X</div>
      <!--  @click="updateEvent" -->
      <div @click="editEvent" class="evento_edit" contenteditable="false">Edit</div>
      <div @click="updateEvent" class="evento_save" contenteditable="false">Save</div>

      <div class="evento_time">
        <strong>Event Time:</strong>
        <span id="eventoTime">{{currEvent.time}}</span>
      </div>
      <div class="evento_status">
        <strong>Status:</strong>
        <span id="eventoStatus">{{currEvent.status}}</span>
      </div>
      <div class="evento_map">
        <div class="map" ref="map">
        </div>
      </div>
      <div class="evento_content" id="eventoDescription" v-html="currEvent.description"></div>
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
        currEvent: {},
        editMode: false,
        currEventEdited: {} //will be init at loadEvent
      }
    },
    methods: {
      changed(event) {
            console.log(this.currEventEdited);  
            // this.currEventEdited.name = $(event.target).html();
            // console.log(this.currEventEdited);  
            
        },
      loadEvent(eventId) {
          this.$http.get(`event/${eventId}`)
              .then(res => res.json())
              .then(event => {
                  // console.log(event);
                  this.currEvent = event;
                  this.currEventEdited = event;
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
            });
      },
      
      updateEvent() {
        console.log(this.currEvent);
        
        let elEvName = document.querySelector('#eventoName');
        let elEvTime = document.querySelector('#eventoTime');
        let elEvStatus = document.querySelector('#eventoStatus');
        let elEvDescription = document.querySelector('#eventoDescription');

        this.currEvent.name = currEvent.name;
        this.currEvent.time = elEvTime.innerHTML;
        this.currEvent.status = elEvStatus.innerHTML;
        this.currEvent.description = elEvDescription.innerHTML;

        this.$http.put('event', this.currEvent)
        .then(res => res.json())
        .then(res => {
            console.log('Msg rom server: ', res)
        });
        
        elEvName.style.backgroundColor = 'lightgrey';
        elEvTime.style.backgroundColor = 'lightgrey';
        elEvStatus.style.backgroundColor = 'lightgrey';
        elEvDescription.style.backgroundColor = 'lightgrey';

        elEvName.setAttribute('contenteditable', 'false');
        elEvTime.setAttribute('contenteditable', 'false');
        elEvStatus.setAttribute('contenteditable', 'false');
        elEvDescription.setAttribute('contenteditable', 'false');

        document.querySelector('.evento_save').style.display = 'none';
      },
      goBack: event => {
        window.history.go(-1);
      },
      editEvent: () => {
        let elEvName = document.querySelector('#eventoName');
        let elEvTime = document.querySelector('#eventoTime');
        let elEvStatus = document.querySelector('#eventoStatus');
        let elEvDescription = document.querySelector('#eventoDescription');

        elEvName.style.backgroundColor = 'white';
        elEvTime.style.backgroundColor = 'white';
        elEvStatus.style.backgroundColor = 'white';
        elEvDescription.style.backgroundColor = 'white';

        elEvName.setAttribute('contenteditable', 'true');
        elEvTime.setAttribute('contenteditable', 'true');
        elEvStatus.setAttribute('contenteditable', 'true');
        elEvDescription.setAttribute('contenteditable', 'true');

        document.querySelector('.evento_save').style.display = 'block';
      }
    },
    computed: {},
    components: {},
    created() {
      const eventId = this.$route.params.id;
      this.loadEvent(eventId);
    },
    mounted() {
    }
  }


</script>

<style scoped>
  /* Always set the map height explicitly to define the size of the div
    * element that contains the map. */
  
  .map {
    height: 300px;
    width: 100%;
  }
  /* Optional: Makes the sample page fill the window. */
  
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .evento_map {
    clear: both;
    background: lightblue;
    /*float: right;*/
    margin: 0 20px;
  }
  
  .evento_card {
    /*width: 100%;*/
    min-width: 98%;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    background: lightgrey;
    overflow: hidden;
    padding: 7px 16px;
    margin: 10px 15px 10px 10px;
    border-radius: 4px;
    box-shadow: 1px 2px 5px #000000;
  }
  
  .evento_title {
    font-size: 22px;
    height: auto;
    color: #000000;
    margin: 10px 0;
    overflow: hidden;
    border-bottom: solid 1px grey;
    float: left;
    width: 97%;
  }
  
  .evento_title:hover {
    cursor: default;
    text-decoration: none;
  }
  
  .evento_close {
    float: right;
    color: green;
    font-weight: bold;
    cursor: pointer;
    font-size: 22px;
  }
  
  .evento_time,
  .evento_status {
    font-size: 18px;
    float: left;
    clear: both;
  }
  
  .evento_content {
    margin: 10px 0 0 0;
    font-size: 16px;
    max-height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
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
  
  .evento_edit:hover,
  .evento_save:hover {
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
  
  .border {
    border: solid 1px red;
  }
</style>