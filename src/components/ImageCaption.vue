<template>
  <div class="custom-caption" style="">
    <div class="q-pl-lg">
      <div class="q-pa-sm " style="font-size: 22px">{{topSubHeading}}</div>
      <div class="text-h3 q-py-sm text-weight-light q-pa-sm">{{heading}}</div>
      <div class="text-h6 q-py-sm text-weight-light q-pa-sm">{{content}}</div>
      <div class="text-h6 q-py-sm q-pa-sm">Producer: <div class="text-weight-light">{{producer}}</div></div>
      <div class="text-h6 q-py-sm q-pa-sm">Director: <div class="text-weight-light">{{director}}</div></div>
      <div class="text-h6 q-py-sm q-pa-sm">Cast: <div class="text-weight-light">{{cast}}</div></div>

      <div class=" justify-center">

        <q-btn class="transparent custom-button q-my-md" style="" label="Watch Trailer" @click="routeToLink"/>
      </div>

    </div>
  </div>
</template>

<script>

export default {
        name: "ImageCaption",
        props:{
          topSubHeading:'',
          heading:'',
          content:'',
          producer:'',
          director:'',
          cast:'',
          route:{default:''}
        },
  methods:{
          routeToLink(){

             window.location.href =  this.route
          }
  }
    }
</script>

<style scoped>

</style>
