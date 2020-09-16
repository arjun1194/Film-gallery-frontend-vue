<template>
  <Layer title="Movies" >
    <template v-slot:default >
      <div class="row justify-center q-px-lg">
        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 q-pa-md" v-for="i in films.data">
            <FilmCard :title="i.title" :subtitle="i.subtitle" :image-url="i.imageUrl" />
        </div>
      </div>

    </template>
  </Layer>
</template>

<script>
    import FilmCard from "./FilmCard";
    import Layer from "./Layer";
    export default {
        name: "Films",
      components: {Layer, FilmCard},
      data(){
          return{
            films:{
              data:[

                {
                  title:'Anjaana Anjaani',
                  subtitle:'2010',
                  imageUrl:require('../assets/anjaana_anjaani_1st_poster_by_metalraj copy.jpg')
                },
                {
                  title:'Dishoom',
                  subtitle:'2016',
                  imageUrl:require('../assets/dishoom.jpg')
                },
                {
                  title:'HeroPanti',
                  subtitle:'2014',
                  imageUrl:require('../assets/heropanti.jpg')
                },
                {
                  title:'Heyy Baby',
                  subtitle:'2007',
                  imageUrl:require('../assets/heyy baby.jpg')
                },
                {
                  title:'Housefull 2 ',
                  subtitle:'2012',
                  imageUrl:require('../assets/housefull 2.jpg')
                },
                {
                  title:'Housefull 3',
                  subtitle:'2016',
                  imageUrl:require('../assets/housefull3.jpg')
                },
                {
                  title:'Judwaa',
                  subtitle:'1997',
                  imageUrl:require('../assets/judwaa.png')
                },
                {
                  title:'Judwaa 2',
                  subtitle:'2017',
                  imageUrl:require('../assets/judwaa 2.jpg')
                },
                {
                  title:'Jaan-e-man',
                  subtitle:'2006',
                  imageUrl:require('../assets/jaaneman.jpg')
                },
                {
                  title:'Jeet',
                  subtitle:'1996',
                  imageUrl:require('../assets/Jeet_1996_poster.jpg')
                },
                {
                  title:'Kambhakt Ishq',
                  subtitle:'2009',
                  imageUrl:require('../assets/kambakht ishq.jpg')
                },
                {
                  title:'Mujhse Shaadi Karogi',
                  subtitle:'2004',
                  imageUrl:require('../assets/mujhse shaadi karogi.jpg')
                },

              ]
            }
          }
      },
      methods:{
          goto(route){
            console.log('Clicked on Film Card')
            this.$router.push(route);
          },
      }
    }
</script>

<style scoped>

</style>
