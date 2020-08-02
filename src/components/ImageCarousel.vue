<template>
  <div class="row text-white ">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-carousel  animated  infinite autoplay v-model="slide" height="65vh">
          <q-carousel-slide :name="slide.name" :key="slide.name" :img-src="slide.imageUrl" v-for="slide in details"/>
        </q-carousel>
    </div>
    <div class="col-lg-6 col-sm-12" >
      <ImageCaption  top-sub-heading="Available on blu-ray, dvd, online" heading="The Invisible man" :content="content" route="/"/>
    </div>
  </div>

</template>

<script>
    import ImageCaption from "./ImageCaption";
    export default {
        name: "ImageCarousel",
      components: {ImageCaption},
      data () {
        return {
          slide: 'first',
          content:'After staging his own suicide, a crazed scientist uses his power to become invisible to stalk and terrorize his ex-girlfriend. When the police refuse to believe her story, she decides to take matters into her own hands and fight back.'

        }
      },
      props:{
          details:{}
      }
    }
</script>

<style scoped>

</style>
