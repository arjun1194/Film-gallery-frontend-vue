<template>
  <q-card flat bordered class="my-card"  @click="$router.push('/film/1')">
    <img :src="imageUrl" style="max-height: 300px">
    <q-card-section>
      <div class="text-h6">{{title}}</div>
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
        }
    }
</script>

<style scoped>

</style>
