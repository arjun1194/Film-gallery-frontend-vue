<template>

  <div>
  <div class="row text-white justify-center ">

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-carousel animated infinite autoplay v-model="value" @transition="setValue" height="65vh">
        <q-carousel-slide :name="index" :key="item.name+index" :img-src="item.imageUrl" v-for="(item,index) in details"/>
      </q-carousel>
    </div>

    <div class="col-lg-6 col-sm-12 col-xs-12 ">
      <ImageCaption
        :top-sub-heading="details[value].topSubHeading"
        :heading="details[value].heading"
        :content="details[value].information"
        :route="details[value].trailerLink"
        :director="details[value].director"
        :cast="details[value].cast"
        :producer="details[value].producer"
      />
    </div>


    <!--Dots Indicators-->
  </div>


  <div class="row q-mt-md justify-center">
    <div v-for="(i,index) in details"   style="border:1px solid black;border-radius: 999px;width: 16px;height:16px;margin-left: 8px" :style="cStyle(index)" @click="value=index"></div>
  </div>


  </div>



</template>

<script>
import ImageCaption from "./ImageCaption";

export default {
  name: "ImageCarousel",
  components: {ImageCaption},
  data() {
    return {
      value:0,


    }
  },
  created() {

  },
  methods:{
    setValue(n,o){
      this.value = n
    },
    cStyle(index){
      if (this.value===index) return {background:'white'}
      else return {background:'grey'}
    }
  },
  props: {
    details: {}
  },
  computed: {


  }
}
</script>

<style scoped>

</style>
