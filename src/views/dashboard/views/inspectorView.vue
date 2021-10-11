<template>
    <div>
        <Navbar />
        <div flat class="mt-5">
            <v-card-text class="custom-card-text" style="color:white !important;">
                <str class="text-h5 " >
                Inspector Inspection Detail View 
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
                        v-model="ticketNumber"
                        label="Ticket Number"
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="passengerName"
                        label="Passenger Name"
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
                        v-model="inspectorLocation"
                        label="Inpector Location"
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
                        v-model="dateTime"
                        label="Date and Time"
                        required
                        readonly
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="fineAmount"
                        label="Fine Amount"
                        required
                        readonly
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
                </v-form>
                </v-card>
                
            </v-card-text>
        </div> 
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
  export default {
    components:{
    Navbar
    },
    // props:[
    //     'id',
    //     'passengerName',
    //     'inspectorName',
    //     'inspectorLocation',
    //     'dateTime',
    //     'fineAmount',
    // ],
    data: () => ({
      valid: false,
      ticketNumber: '',
      passengerName: '',
      inspectorName: '',
      inspectorLocation: '',
      dateTime: '',
      fineAmount: ''
    }),
    // mounted() {
        
    // },
  }
</script>
<style>
.custom-card-text{
    background: #3f51b5
}
</style>