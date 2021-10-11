<template>
<div>
  <v-card-title style="color:white !important;">
      Inspection Details
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
    :items="inspectors"
    :items-per-page="5"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:item.action="{item}">
        <v-btn
        @click="pushView(item.id)"
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
          { text: 'Date', value: 'date' },
          { text: 'Inspect Location', value: 'location' },
          { text: 'Inspector Name', value: 'inspectorName' },
          { text: 'Bus Id', value: 'bus' },
          { text: 'Route Id', value: 'route' },
          { text: '', value: 'action' },
        ],
        
        inspectors:[]
      }
    },
    methods:{
      pushView(id){
        this.$router.push(`/dashboard/${id}/inpector`)
      },
      async getAllInspectionDetails(){
        try{
          const Response = await RestAdapter.get('/api/v1/inspection')
          console.log("🚀 ~ file: inspectorDetails.vue ~ line 141 ~ getAllInspectorDetails ~ Response", Response)
          const dataArray = Response.data.data.inspection.map((x)=>({
            id: x.id,
            location: x.inspectionLat + x.inspectionLong,
            date: x.createdAt,
            inspectorName: x.inspector.name,
            bus: x.journey.busId,
            route: x.journey.routeId
          }))
          console.log("🚀 ~ file: inspectorDetails.vue ~ line 143 ~ dataArray ~ dataArray", dataArray)
          this.inspectors = dataArray
        }catch(error){
          console.error();
        }
      }
    },
    mounted() {
      this.getAllInspectionDetails()
    },
  }
</script>