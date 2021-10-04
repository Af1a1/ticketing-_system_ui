<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue'
export default Vue.extend({
  components:{
    Navbar
  },
  name: 'App',

  data () {
    return{
      isLoggedIn: false,
    }
  },
});
</script>

