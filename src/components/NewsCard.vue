<template>
 <div class="row">
   <div class="col-12 ">
     <img :src="image" width="100%" style="height: 280px;" @click.native="navigateToNews"/>
   </div>
   <div class="col-12 text-subtitle2 text-grey-6">{{postedBy}}</div>
   <a :href="link" class="col-12 text-subtitle1 text-white" >{{title}}</a>
   <div class="col-12 date">{{date}}</div>
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
          link:{}

      },

      methods:{
          navigateToNews(){


              console.log("Item clicked")
              window.location.href = this.link
          }
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
