<template>
  <div
  >
    <div
      background-color="transparent"
      color="basil"
      class="mb-5 mt-5"
    >
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
      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5">
            <Profile />
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!-- tab 2 -->
      <v-tab-item>
        <div flat>
          <v-card-text class="custom-card-text">
              <TopUp />
          </v-card-text>
        </div>
      </v-tab-item>
      <!-- tab 3 -->
      <v-tab-item>
        <div flat>
          <v-card-text  class="custom-card-text">
              <MyJourney />
          </v-card-text>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import MyJourney from './tabs/myJourney.vue'
import TopUp from './tabs/topUp.vue'
import Profile from './tabs/profile.vue'
  export default {
    components:{
        MyJourney,
        TopUp,
        Profile
    }, 
    data () {
      return {
        tabs: null,
        items: [
          {tab: 'Profile'},
          {tab: 'TopUp Account'},
          {tab: 'My Journeys'},
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