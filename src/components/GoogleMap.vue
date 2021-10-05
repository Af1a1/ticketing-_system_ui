<template>
  <div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    />
  </div>
</template>

<script>
import RestAdapter from '@/restAdapter/index'
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      mapDetails: ''
    }
  },
  methods:{
    async getMap(id){
      try{
        const Response = await RestAdapter.get(`/api/v1/journey/${id}`)
        const mapDetails = Response.data.data.map((x)=>({
          latitude: x.latitude,
          longitude: x.logtitude,
        }))
        this.center.lat = mapDetails.latitude
        this.center.lng = mapDetails.longitude
      }catch(error){
        console.error();
      }
    }
  }
};
</script>