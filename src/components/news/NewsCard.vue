<template>
  <q-card class="my-card q-mt-md q-ml-md" >
    <img :src="image" :style="cImageSize" />

    <q-card-section>
      <a :href="link" class="text-caption">{{title}}</a>
      <div class="text-caption text-grey-6">{{caption}}</div>
    </q-card-section>

  </q-card>
</template>

<script>
export default {
name: "NewsCard",
  props:{
    image:'',
    title:'',
    caption:'',
    link:'',
  },
  computed:{
    cImageSize(){
      let x = this.$q.screen
      if (x.lg||x.xl||x.md) return {height:'538px'}
      else return {}
    }
  }
}
</script>

<style scoped>

</style>
