<template>
    <div>
        <Navbar />
        <div flat class="mt-5">
            <v-card-text class="custom-card-text" style="color:white !important;">
                <str class="text-h5 " >
                Inspection Detail View 
            </str> 
                <v-card>
                    <v-form v-model="valid">
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="location"
                        label="Location"
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="date"
                        label="DATE"
                        readonly
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="inspectorName"
                        label="Inpector Name"
                        required
                        readonly
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="bus"
                        label="Bus Id"
                        required
                        readonly
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="route"
                        label="Route Id"
                        required
                        readonly
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
                </v-form>
                </v-card>
                <span class="m-1">
                    <h6>Fines</h6>
                </span>
                <v-card >
                    <v-data-table
                    :headers="headers"
                    :items="fines"
                    :items-per-page="5">
                    </v-data-table>
                </v-card>
            </v-card-text>
        </div> 
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import RestAdapter from '@/restAdapter/index'
  export default {
    components:{
    Navbar
    },
    data: () => ({
      valid: false,
      location: '',
      date: '',
      inspectorName: '',
      bus: '',
      route: '',
      headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Account Id', value: 'accountId' },
          { text: 'Inspector Id', value: 'inspectionId' },
          { text: 'Amount', value: 'amount' }
        ],
      fines:[]
    }),
    methods:{
        async getInspectionDetails(){
        try{
          const Response = await RestAdapter.get(`/api/v1/inspection/${this.$route.params.id}`)
          const dataArray = Response.data.data.inspection.map((x)=>({
            id: x.id,
            location: x.inspectionLat + x.inspectionLong,
            date: x.createdAt,
            inspectorName: x.inspector.name,
            bus: x.journey.busId,
            route: x.journey.routeId
          }))
          this.location = dataArray[0].location
          this.date = dataArray[0].date
          this.inspectorName = dataArray[0].inspectorName
          this.route = dataArray[0].route
          this.bus = dataArray[0].bus
          this.fines = Response.data.data.inspection[0].fines
          this.inspectors = dataArray
        }catch(error){
          console.error();
        }
      }
    },
    mounted() {
      this.getInspectionDetails()  
    },
  }
</script>
<style>
.custom-card-text{
    background: #3f51b5
}
</style>