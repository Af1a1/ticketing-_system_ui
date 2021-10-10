<template>
  <v-app>
    <v-main>
      <!-- <Navbar /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components:{
  
  },
  name: 'App',

  data () {
    return{
      isLoggedIn: false,
    }
  },
});
</script>

