<template>
  <div class="row text-white ">

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-carousel animated infinite autoplay v-model="value" @transition="setValue" height="65vh">
        <q-carousel-slide :name="index" :key="item.name+index" :img-src="item.imageUrl" v-for="(item,index) in details"/>
      </q-carousel>
    </div>

    <div class="col-lg-6 col-sm-12">
      <ImageCaption
        :top-sub-heading="details[value].topSubHeading"
        :heading="details[value].heading"
        :content="details[value].information"
        :route="details[value].trailerLink"
      />
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
    console.log("Inside Image Caoursel ",this.details)
  },
  methods:{
    setValue(n,o){
      this.value = n
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
