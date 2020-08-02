<template>
    <div class="row justify-center q-py-xl" :class="color">
      <div class="col-12 text-h5 q-px-lg">{{title}}</div>
      <div class="col-12">
        <slot></slot>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Layer",
      props:{
          color:{},
          title:{},
      }
    }
</script>

<style scoped>

</style>
