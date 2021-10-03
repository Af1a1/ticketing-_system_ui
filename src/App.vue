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
import Navbar from '@/views/dashboard/Navbar.vue'
export default Vue.extend({
  components:{
    Navbar
  },
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
<style>
body{
  background: #ebf5fb !important;
}
</style>
