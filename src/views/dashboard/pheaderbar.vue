<template>
  <div>
      <b-row class="mt-n1 ml-0 mr-0">

               <!-- Left side Icons -->

          <b-col cols="11"  class="pb-2 pt-2">
            <div class="row">

               <!-- 01 Total Statement -->

                <div class="d-flex align-items-center mr-3 mb-1">

                    <b-avatar variant="light-primary" rounded>
                        <feather-icon icon="FileIcon" size="18"/>
                    </b-avatar>

                   <div class="ml-1">
                     <h4 class="mb-0 font-weight-bolder "> 246 </h4>
                     <small>Total Statements</small>
                    </div>
                </div>

               <!-- 02 Total Paid -->

                 <div class="d-flex align-items-center mr-3 mb-1">

                    <b-avatar variant="light-primary" rounded>
                        <feather-icon icon="DollarSignIcon" size="18" />
                    </b-avatar>

                   <div class="ml-1">
                      <h4 class="mb-0 font-weight-bolder"> £125,750.00 </h4>
                      <small>Total Paid</small>
                   </div>
                 </div>

                <!-- 03 Paid This Month -->

                 <div class="d-flex align-items-center mr-3 mb-1">

                    <b-avatar variant="light-success" rounded >
                        <feather-icon icon="CreditCardIcon" size="18" />
                    </b-avatar>
      
                    <div class="ml-1">
                      <ul class="list-inline mb-0">
                         <li class="list-inline-item">
                             <h4 class="mb-0 font-weight-bolder">£18,950.00</h4>
                         </li>
                         <li class="list-inline-item">
                            <small class="text-success font-weight-bold small">+17%</small>
                         </li>
                      </ul>
                           <small>Paid This Month</small>
                    </div>
                 </div>

                <!-- 04 Unpaid Statement -->

                 <div class="d-flex align-items-center mr-3 mb-1">

                    <b-avatar variant="light-danger" rounded >
                       <feather-icon icon="AlertCircleIcon" size="18" />
                    </b-avatar>

                    <div class="ml-1">
                        <h4 class="mb-0 font-weight-bolder">6 </h4>
                        <small>Unpaid Statements</small>
                    </div>
                </div>

                <!-- 05 Total unpaid -->

                <div class="d-flex align-items-center mr-3 mb-1">
                   <b-avatar variant="light-danger" rounded> 
                      <feather-icon icon="CreditCardIcon" size="18" />
                    </b-avatar>

                    <div class="ml-1">
                        <h4 class="mb-0 font-weight-bolder"> £11,300.00 </h4>
                        <small>Total Unpaid</small>
                    </div>
                </div>
            </div>
          </b-col>

         <!-- Right side Downloading button -->

          <b-col cols="1"  class="pt-0 pb-2 pt-xl-2 pb-xl-0 ml-n1 ">
            <b-row >
                <div class="d-flex justify-content-start  mt-2 mt-md-0 pl-0 pl-md-0 ml-auto">

                      <b-button  
                            size="23"
                            variant="outline-white"
                            class="btn-icon bg-white text-primary" >

                           <feather-icon
                              size="18"
                              icon="DownloadIcon" 
                            />
                      </b-button>
                </div>
            </b-row>
          </b-col>
      </b-row>
  </div>
</template>

<script>

import {BAvatar, BBadge, BButton, BCard, BCol, BLink, BRow} from 'bootstrap-vue'

export default {
  name: 'profile-image-bar',
  components: {
    BRow,
    BCol,
    BButton,
    BAvatar,
  },
  data() {
    return { 
    }
  },
}
</script>

<style scoped>

</style>
