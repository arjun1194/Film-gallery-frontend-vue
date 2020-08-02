<template>
  <q-page>
      <div class="row justify-center">
        <div class="col-lg-8 col-sm-12 col-xs-12 " style="height: 40vh;object-fit:fill;background-image: url('https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
          <img class="bg-blue" style="height: 200px;position: absolute;" :style="cImageStyle" src="https://www.universalstudios.com/uploads/12141.jpg"/>
        </div>
      </div>
  </q-page>
</template>

<script>
    export default {
        name: "FilmDetail",
      computed:{
          cImageStyle(){
            return {marginLeft:(this.$q.screen.xs||this.$q.screen.sm)?'calc(50% - 100px)':'50px',top: `calc(40vh - ${50}px)`}
          }
      }
    }
</script>

<style scoped>

</style>
