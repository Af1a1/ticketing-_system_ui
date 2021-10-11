<template>
<div >
    <v-card-title style="color:white !important;">
    Passenger Journey Details
    <v-spacer></v-spacer>
    <v-btn depressed class="mt-2">
      Generate Report
    </v-btn>
    </v-card-title>
    
    <v-data-table
    :headers="headers"
    :items="passengers"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item.action="{item}">
        <v-btn
        @click="pushView(item)"
        >View</v-btn>
    </template>
  </v-data-table>
</div>
  
</template>
<script>
import RestAdapter from '@/restAdapter/index'
  export default {
    data () {
      return {
        headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Ticket No', value: 'id' },
          { text: 'Date and Time', value: 'date' },
          { text: 'Departure', value: 'carbs' },
          { text: 'Destination', value: 'protein' },
          { text: 'Journey Fair', value: 'fare' },
          { text: 'Fines', value: 'fine' },
          { text: '', value: 'action' },
        ],
        passengers:[]
      }
    },
    methods:{
      pushView(item){
        this.$router.push({ name: 'passenger-detail', params: {id: item.id, date: item.date, depLat: item.depLat, depLong: item.depLong, desLat: item.desLat, desLong: item.desLong, fare: item.fare, fine: item.fine }})
      },
      async getAllPassengerDetails(){
        try{
          const Response = await RestAdapter.get('/api/v1/passenger/getAllJourneyDetails')
          const dataArray = Response.data.data.body.map((x)=>({
              id: x.accountId,
              date: x.Date,
              depLat: x.depatureLocation.lat,
              depLong: x.depatureLocation.long,
              desLat: x.destinationLocation.lat,
              desLong: x.destinationLocation.long,
              fare: x.fare ? x.fare : 'N/A',
              fine: x.fine ? x.fine : 'N/A',
          }))
          this.passengers = dataArray
        }catch(error){
          console.error();
        }
      }
    },
    mounted() {
      this.getAllPassengerDetails()
    },
  }
</script>
<style scoped>
