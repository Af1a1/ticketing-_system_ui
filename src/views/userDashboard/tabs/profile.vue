<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="8"
    >
      <v-card>
          <v-img
          src="https://picsum.photos/700?image=996"
          height="200px"
        ></v-img>
        <v-card-title class="darken-1" style="background:#3f51b5">
          <span class="text-h5 white--text">Sarah Mcbeal</span>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(650) 555-1234</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(323) 555-6789</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>mcbeal@example.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Orlando, FL 79938</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import RestAdapter from '@/restAdapter/index'
export default {
    data: () => ({
      user:''
    }),
    methods:{
        async getProfileDetails(id){
          try{
            const Response = await RestAdapter.get(`/api/v1/account/${id}`)
            this.user = Response.data.data.map((x)=>({
              id: x.id,
              name: x.name,
              emai: x.email,
              employeeId: x.employeeId,
          }))
          }catch(error){
            console.error();
          }
          
        }
    }
  }
</script>