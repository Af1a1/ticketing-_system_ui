<template>
  <div
  >
  <Navbar />
    <div
      background-color="transparent"
      color="basil"
      class="mb-5 mt-5"
    >
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <!-- <v-row justify="space-around">
        <v-col
            cols="5"
            md="5"
        >
        <h4>Lanka Go Travel Managment System</h4>
        </v-col>
        <v-col
            cols="5"
            md="2"
            >
            <v-avatar color="indigo">
            <v-icon dark>
                mdi-account-circle
            </v-icon>
            </v-avatar>
            <strong class="ml-5">John Doe</strong>
        </v-col>
    </v-row> -->
      <template >
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </template>
    </div>

    <v-tabs-items v-model="tabs">
        <!-- tab 1 -->
      <!-- <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5">
            Home
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-tab-item> -->
      <!-- tab 2 -->
      <v-tab-item>
        <div flat>
          <v-card-text class="custom-card-text">
              <InspectorDetails />
          </v-card-text>
        </div>
      </v-tab-item>
      <!-- tab 3 -->
      <v-tab-item>
        <div flat>
          <v-card-text  class="custom-card-text">
              <PassengerDetails />
          </v-card-text>
        </div>
      </v-tab-item>
      <!-- tab 4 -->
      <!-- <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5">
            About Us
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-tab-item> -->
    </v-tabs-items>
  </div>
</template>
<script>
import Home from './tabs/home.vue'
import InspectorDetails from './tabs/inspectorDetails.vue'
import PassengerDetails from './tabs/passengerDetails.vue'
import Navbar from '@/components/Navbar.vue'
  export default {
    components:{
        Navbar,
        InspectorDetails,
        PassengerDetails
    }, 
    data () {
      return {
        tabs: null,
        items: [
          //{tab: 'Home'},
          {tab: 'Inspection Details'},
          {tab: 'Passenger Details'},
         // {tab: 'About Us'},
        ],
      }
    },
  }
</script>

<style scoped>
body{
  background: #ebf5fb !important;
}
.v-tab .v-tab--active{
    background: '#3f51b55e' !important; 
}
.custom-card-text{
    background: #3f51b5
}
</style>