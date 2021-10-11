<template>
    <div>
        <Navbar />
        <div flat class="mt-5">
        <v-card-text class="custom-card-text" style="color:white !important;">
            <v-card-title class="text-h5">
                Passenger Journey Details View 
            </v-card-title>
            <v-row>
                <v-col cols="6" align-self="center">
                    <div> 
                        <v-card>
                            <v-form v-model="valid">
                            <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                md="12"
                                >
                                <v-text-field
                                    v-model="ticketNumber"
                                    label="Ticket Number"
                                    readonly
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="12"
                                md="12"
                                >
                                <v-text-field
                                    v-model="dateInp"
                                    label="Date and Time"
                                    required
                                    readonly
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="departure"
                                    label="Departure"
                                    required
                                    readonly
                                ></v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="destination"
                                    label="Destination"
                                    required
                                    readonly
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="fairInp"
                                    label="Jouney Fair"
                                    required
                                    readonly
                                ></v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="fineInp"
                                    label="Fines"
                                    required
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            </v-container>
                            </v-form>
                        </v-card>
                    </div>
                </v-col>
                <v-col cols="6" align-self="center">
                    <div>
                        <v-card>
                            <v-container>
                                <!-- <GMapMap
                                    :center="{lat: 51.093048, lng: 6.842120}"
                                    :zoom="7"
                                    map-type-id="terrain"
                                    style="width: 100vw; height: 900px"
                                >
                                </GMapMap> -->
                                <GoogleMap />
                            </v-container>
                            <v-bottom-navigation >
    <v-btn value="recent">
      <v-icon>{{icons.mdiEye }}</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <v-icon>{{icons.mdiMapMarker}}</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <v-icon>{{icons.mdiShare}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
        
        </div> 
    </div>
</template>
<script>
 import { mdiEye, mdiMapMarker, mdiShare } from '@mdi/js'
 import GoogleMap from '@/components/GoogleMap.vue'
 import Navbar from '@/components/Navbar.vue'
  export default {
    components:{
        Navbar,
        GoogleMap
    },
    props:[
        'id',
        'date',
        'depLat',
        'depLong',
        'desLat',
        'desLong',
        'fare',
        'fine'
    ],
    data: () => ({
    icons: {
        mdiEye,
        mdiMapMarker,
        mdiShare
      },
      center: {lat: 51.093048, lng: 6.842120},
      valid: false,
      ticketNumber: '',
      dateInp:'',
      departure:'',
      destination:'',
      fairInp: '',
      fineInp: ''
    }),
    methods:{
    },
    mounted() {
        this.ticketNumber = this.id,
        this.dateInp = this.date,
        this.departure = 'Gampaha'
        this.destination = "Maradan",
        this.fairInp = this.fare,
        this.fineInp = this.fine
    },
  }
</script>
<style>
.custom-card-text{
    background: #3f51b5
}
</style>