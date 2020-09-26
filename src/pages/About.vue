<template>

        <div class="row justify-center">
          <div class="col-12 text-h5 q-pa-xl text-center">About the Owner - (Matloob Khan)</div>
          <div class="col-lg-7  col-sm-12 col-xs-12 text-weight-light q-pa-md" :style="cJustification">{{ownerInfo}}</div>
          <div class="col-lg-5 col-sm-12 col-xs-12">
            <div class="flex justify-center">
              <img  src="../assets/about_image.jpg" style="height:600px;width:100%;object-fit: contain"/>
            </div>
          </div>
          <div class="col-12 text-h5 q-pa-xl text-center">About the Company - (Ekta Films)</div>
          <div class="col-lg-7 col-sm-12 col-xs-12 text-weight-light q-pa-md text-left" :style="cJustification">{{aboutCompany}}</div>
          <div class="col-lg-5 col-sm-12 col-xs-12">
            <div class="flex justify-center  q-pa-md">
              <img src="../assets/about_company.jpeg" class="self-start" style="width:80%;object-fit: contain"/>
            </div>
          </div>
        </div>
      </template>


<script>
    import Layer from "../components/Layer";
    export default {
        name: "About",
      data(){
          return {
            ownerInfo:'Matloob Khan is a Film Distributor,Financer and Producer born in Meerut and based in Delhi who\n' +
              'started his career buying old films in Meerut area for cinema reruns.Within a few years the business\n' +
              'expanded and covered the entire states of Delhi and Uttar Pradesh.With an office in Moti Cinema,Old\n' +
              'Delhi .Belonging to a Farming and Medical background family, he shifted to a film making and\n' +
              'distribution business.In 1996 he became the first distributor in the country to release 2 films on a single\n' +
              'day belonging to the same distributor and also broke the record of the most distributed films in an year\n' +
              'by a single distributor ,by distributing 11 films in 1996-1997.\n' +
              'Matloob Khan has financed and distributed movies of various actors.Mainly collaborating with Salman\n' +
              'Khan and Akshay Kumar for many films.Most of the Khiladi series films have also been distributed by\n' +
              'him.\n' +
              'Matloob Khan has collaborated with producer Sajid Nadiadwala as a distributor on most of his films.\n' +
              'Sharing an emotional brotherly bond with the renowned producer.Some of Khans famous distributed\n' +
              'films include jeet, Judwaa, Vijaypath , Diljale , Ghatak , Sabse Bada Khiladi,Mr and Mrs Khiladi,Har Dil Jo\n' +
              'Pyaar Karega,Mujhse Shaadi Karogi,Jaaneman, Heyy Babyy ,Kambakht Ishq , Housefull, Kick and many\n' +
              'more.Many of the films distributed by him have become a golden or silver jubilee making Matloob Khan\n' +
              'one of the biggest Individual Film Distributors in the country.',

            aboutCompany:'Ekta Films is a Film Distribution,Production and Financing company founded by Matloob Khan in the\n' +
              'year 1988 in Delhi.The firm has its hub in Delhi,Mumbai and Meerut .The company has its presence\n' +
              'in the entire cinema network across Delhi,Uttar Pradesh and Uttrakhand.Matloob Khan started the\n' +
              'business by buying old films for reruns in cinemas, which cultivated into a vast business of film\n' +
              'distribution.The company distributed most of the movies produced in the 1990s and till date has a\n' +
              'credit of releasing 108 movies.The company has distributed almost all of the films produced under\n' +
              'Nadiadwala Grandson Entertainment in the Delhi UP circuit.',



           }
      },
      computed:{
          cJustification(){
            let s = this.$q.screen
             return (s.lg||s.md||s.xl) ? {fontSize: '20px',textAlign: 'justify'} : {textAlign: 'justify'}

        }
      }
    }
</script>

<style scoped>

</style>
