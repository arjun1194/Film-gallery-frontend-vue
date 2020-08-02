<template>
  <div class="custom-caption" style="height: 65vh;">
    <div class="q-pl-lg">
      <div class="q-pa-sm " style="font-size: 22px">{{topSubHeading}}</div>
      <div class="text-h3 q-py-sm text-weight-light q-pa-sm">{{heading}}</div>
      <div class="text-h6 q-py-sm text-weight-light q-pa-sm">{{content}}</div>
      <div class=" justify-center">

        <q-btn class="transparent custom-button q-my-md" style="max-width: 50%" label="Watch Trailer" :to="route"/>
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
          route:{default:''}
        }
    }
</script>

<style scoped>

</style>
