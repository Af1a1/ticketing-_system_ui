<template>
<div>
  <v-card-title style="color:white !important;">
      Inspector Inspection Details
      <v-spacer></v-spacer>
      <v-text-field 
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.action>
        <v-btn
        @click="pushView"
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
        search:'',
        headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Ticket Number', value: 'calories' },
          { text: 'Passenger Name', value: 'fat' },
          { text: 'Inspect Location', value: 'carbs' },
          { text: 'Inspector Name', value: 'protein' },
          { text: 'Date Time', value: 'iron' },
          { text: '', value: 'action' },
        ],
        desserts: [
          {
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            //action:'',
          },
          {
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            //action:'',
          },
          {
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            // action:'',
          },
          {
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
            //action:'',
          },
          {
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
            //action:'',
          },
          {
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
            //action:'',
          },
          {
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
            //action:'',
          },
          {
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
            // action:'',
          },
          {
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            // action:'',
          },
        ],
      }
    },
    methods:{
      pushView(){
        this.$router.push(`/dashboard/${1}/inpector`)
      },
      async getAllInspectorDetails(){
        try{
          const Response = await RestAdapter.get('/api/v1/inspector')
          console.log("🚀 ~ file: inspectorDetails.vue ~ line 141 ~ getAllInspectorDetails ~ Response", Response)
          const inspector = Response.data.data.map((x)=>({
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
      }
    },
    mounted() {
      this.getAllInspectorDetails()
    },
  }
</script>