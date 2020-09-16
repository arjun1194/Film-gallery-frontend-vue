<template>

        <div class="row" style="font-size: 200px">
          <div class="col-4 bg-red q-pa-lg"></div>
          <div class="col-8 text-subtitle1">
            <div class="row">
              <div class="col-12 text-h6 text-center">About the Owner - (Matloob Khan)</div>
              <div class="col-12 text-weight-light q-pa-md" style="font-size: 20px">{{ownerInfo}}</div>
            </div></div>

        </div>
      </template>


<script>
    import Layer from "../components/Layer";
    export default {
        name: "About",
      data(){
          return {
            ownerInfo:'Matloob Khan is a Film Distributor,Financer and Producer born in Meerut and based in Delhi who started his career with buying old films in Meerut area for cinema reruns.Within a few years the' +
              ' business had covered the entire states of Delhi,Uttar Pradesh and had an office in Moti Cinema,Old' +
              ' Delhi .Belonging from a farming and medical background he shifted to a film making and distributing' +
              ' business.In 1996 he became the first distributor in the country to release 2 films on a single day' +
              ' belonging to the same distributor and also broke the record of the most distributed films in an year' +
              ' by a single distributor by distributing 11 films in 1996-1997.Matloob Khan has collaborated with' +
              ' producer Sajid Nadiadwala as a distributor on most of his films.Sharing an emotional brotherly bond' +
              ' with the renowned producer.Some of Khans famous distributed films include' +
              ' Jeet,Judwaa,Vijaypath,Diljale,Ghatak,Sabse Bada Khiladi,Mr and Mrs Khiladi,Har Dil Jo Pyaar' +
              ' Karega,Mujhse Shaadi Karogi,Jaaneman,Hey Baby,Kambakht Ishq,Housefull,kick and many' +
              ' more.Many of the films distributed by him have become a golden or silver jubilee making Matloob' +
              ' Khan one of the biggest Individual Film Distributors in the country.'
           }
      }
    }
</script>

<style scoped>

</style>
