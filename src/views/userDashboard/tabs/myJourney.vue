<template>
<div >
    <v-card-title style="color:white !important;">
    My Journey Details
    <v-spacer></v-spacer>
    <v-btn depressed class="mt-2" @click="generateReport()">
      Generate Report
    </v-btn>
    </v-card-title>
    
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
  
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
          { text: 'Ticket No', value: 'calories' },
          { text: 'Date and Time', value: 'fat' },
          { text: 'Departure', value: 'carbs' },
          { text: 'Destination', value: 'protein' },
          { text: 'Journey Fair', value: 'iron' },
          { text: 'Fines', value: 'iron' },
          { text: '', value: 'action' },
        ],
        desserts: [
          {
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
        journey:{}
      }
    },
    methods:{
      async getJourney(id){
        try{
            const Response = await RestAdapter.get(`/api/v1/journey/${id}`)
            this.journey = Response.data.data.map((x)=>({
              id: x.id,
              date: x.date,
              departure: x.departure,
              destination: x.destination,
              fair: x.fair,
              fines: x.fines,
          }))
          }catch(error){
            console.error();
          }
      },
      generateReport(){
        console.log('test')
      }
    }
  }
</script>
<style scoped>
