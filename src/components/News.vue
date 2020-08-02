<template>
  <Layer title="Featured News" color="bg-black">
    <template v-slot:default >
      <div class="row justify-center">
        <!--Important News-->
        <div class="col-xs-12 col-sm-12 col-lg-4 q-pa-md text-black" v-for="i in 2">
          <NewsCard />
        </div>
        <div class="col-12">
          <!--Less Important news items-->
          <div class="row justify-center">
            <div class="col-xs-12 col-sm-12 col-lg-3 q-pa-md text-black" v-for="i in 3">
              <NewsCard />
            </div>
          </div>

        </div>

      </div>

    </template>
  </Layer>
</template>

<script>
    import Layer from "./Layer";
    import NewsCard from "./NewsCard";
    export default {
        name: "News",
      components: {NewsCard, Layer}
    }
</script>

<style scoped>

</style>
