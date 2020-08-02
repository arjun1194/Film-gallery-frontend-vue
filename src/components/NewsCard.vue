<template>
 <div class="row">

   <div class="col-12">
     <img src="https://www.universalstudios.com/uploads/45933.jpg" width="100%"/>
   </div>
   <div class="col-12 text-subtitle2">Ekta Films </div>
   <div class="col-12 text-subtitle1"><router-link to="/">‘Jurassic World: Dominion’ Adds Campbell Scott as Key Character from Original Movie</router-link> </div>
   <div class="col-12 date">25 May 2019</div>
 </div>
</template>

<script>
    export default {
        name: "NewsCard",
      data(){
          return {

          }
      },
      props:{
          date:{},
          postedBy:{},
          title:{},
          image:{},

      }
    }
</script>

<style scoped>
  .date{
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-size: 11px;
    text-transform: uppercase;
    text-decoration: none !important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.2px;
    text-align: left;
    color: #8e8e8e;
  }


</style>
