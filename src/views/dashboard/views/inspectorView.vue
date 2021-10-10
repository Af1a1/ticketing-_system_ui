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
                        v-model="firstname"
                        label="Ticket Number"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="lastname"
                        label="Passenger Name"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="email"
                        label="Inpector Name"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="email"
                        label="Inpector Location"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="email"
                        label="Date and Time"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="email"
                        label="Fine Amount"
                        required
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
import RestAdapter from '@/restAdapter/index'
import Navbar from '@/components/Navbar.vue'
  export default {
      components:{
          Navbar
      },
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      email: '',
    }),
    methods: {
        async getInspectecDetails(id){
            try{
                const Response = await RestAdapter.get(`/api/v1/passenger/journey/${id}`)
            }catch(error){
                console.error();
            }   
        }
    }
  }
</script>
<style>
.custom-card-text{
    background: #3f51b5
}
</style>