<template>
  <q-card  flat bordered class="my-card" @click.native="navigate('/movies')">
    <img :src="imageUrl" style="max-height: 300px">
    <q-card-section>
      <div class="text-subtitle1" >{{title}}</div>
      <div class="text-subtitle2 text-blue-grey">{{subtitle}}</div>
    </q-card-section>
  </q-card>
</template>

<script>
    export default {
        name: "FilmCard",
        props:{
          title:'',
          subtitle:'',
          imageUrl:''
        },
      methods:{
          navigate(path){
            this.$router.push(path)
          }
      }
    }
</script>

<style scoped>

</style>
