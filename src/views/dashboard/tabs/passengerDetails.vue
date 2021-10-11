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
          { text: 'Departure', value: 'departure' },
          { text: 'Destination', value: 'destination' },
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
          // console.log("🚀 ~ file: passengerDetails.vue ~ line 55 ~ getAllPassengerDetails ~ Response", Response)
          const dataArray = Response.data.data.passengerHistory.map((x)=>({
              id: x.accountId,
              date: x.createdAt,
              depLat: x.depatureLat,
              depLong: x.depatureLong,
              destination: 'Maradana',
              departure: 'Gampaha',
              desLat: x.destinationLat,
              desLong: x.destinationLong,
              fare: x.fare ? x.fare.amount : 'N/A',
              fine: x.fine ? x.fine.amount : 'N/A',
          }))
          console.log("🚀 ~ file: passengerDetails.vue ~ line 66 ~ dataArray ~ dataArray", dataArray)
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
