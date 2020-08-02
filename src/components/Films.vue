<template>
  <Layer title="Movies" >
    <template v-slot:default >
      <div class="row justify-center ">
        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 q-pa-md" v-for="i in 4">
            <FilmCard title="Invisible Man" subtitle="Ekta Films" image-url="https://www.universalstudios.com/uploads/12141.jpg" />
        </div>
      </div>

    </template>
  </Layer>
</template>

<script>
    import FilmCard from "./FilmCard";
    import Layer from "./Layer";
    export default {
        name: "Films",
      components: {Layer, FilmCard},
      methods:{
          goto(route){
            console.log('Clicked on Film Card')
            this.$router.push(route);
          },
      }
    }
</script>

<style scoped>

</style>
