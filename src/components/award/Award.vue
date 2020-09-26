<template>
  <div class="row ">
    <q-img class=" self-center" :src="awardPhoto" style="width: 40px;height: 92px;" />
    <div class="col-8 self-center q-ml-md ">
      <div class=" text-h6 text-weight-light">{{title}}</div>
      <div class="text-subtitle1 text-yellow">{{awardee}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "Award",
  props:{
    title:'',
    awardee:'',
    awardPhoto:''
  }
}
</script>

<style scoped>

</style>
