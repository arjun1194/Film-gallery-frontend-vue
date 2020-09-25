<template>
  <div class="row" >
    <div class="col-12 text-h4 text-weight-light text-center q-py-md ">{{ year }}</div>
    <div class="col-12 text-h5 text-center" > {{movieName }}</div>
    <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 flex justify-center">
      <q-img :src="poster" class="q-mt-lg" style="width: 200px"/>
    </div>
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
      <div class="row justify-center q-mt-xl " v-for="a in awards">
        <div class="col-8">
          <Award :title="a.title" :award-photo="a.awardPhoto" :awardee="a.awardee" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Award from "components/news/Award";
export default {
name: "AwardTabDetail",
  components: {Award},
  props:{
    year:'',
    movieName:'',
    poster:'',
    awards:[],
  },

}
</script>

<style scoped>

</style>
