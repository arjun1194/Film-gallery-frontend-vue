<template>

        <div class="row">
          <div class="col-12 text-h5 q-pa-xl text-center">About the Owner - (Matloob Khan)</div>
          <div class="col-lg-7 col-sm-12 col-xs-12 text-weight-light q-pa-md text-left" style="font-size: 20px; text-align: justify;">{{ownerInfo}}</div>
          <div class="col-lg-5 col-sm-12 col-xs-12">
            <div class="flex justify-center">
              <img src="../assets/about_image.jpg" style="height:600px;width:100%;object-fit: contain"/>
            </div>
          </div>
          <div class="col-12 text-h5 q-pa-xl text-center">About the Company - (Ekta Films)</div>
          <div class="col-lg-7 col-sm-12 col-xs-12 text-weight-light q-pa-md text-left" style="font-size: 20px; text-align: justify;">{{aboutCompany}}</div>
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
              ' Khan one of the biggest Individual Film Distributors in the country.',

            aboutCompany:'Ekta Films is a Film Distribution,Production and Financing company founded by Matloob Khan in the\n' +
              'year 1988 in Delhi.The firm has its hub in Delhi,Mumbai and Meerut .The company has its presence\n' +
              'in the entire cinema network across Delhi,Uttar Pradesh and Uttrakhand.Matloob Khan started the\n' +
              'business by buying old films for reruns in cinemas, which cultivated into a vast business of film\n' +
              'distribution.The company distributed most of the movies produced in the 1990s and till date has a\n' +
              'credit of releasing 108 movies.The company has distributed almost all of the films produced under\n' +
              'Nadiadwala Grandson Entertainment in the Delhi UP circuit.',



           }
      }
    }
</script>

<style scoped>

</style>
