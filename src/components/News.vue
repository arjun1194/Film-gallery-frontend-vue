<template>
  <Layer title="Featured News" color="bg-black">
    <template v-slot:default >
      <div class="row justify-center">
        <!--Important News-->
        <div class="col-xs-12 col-sm-6 col-lg-4 col-md-6 q-pa-md text-black" v-for="i in news.important">
          <NewsCard
            :date="i.date"
            :image="i.image"
            :link="i.link"
            :title="i.title"
            posted-by=""


          />
        </div>
        <div class="col-12">
          <!--Less Important award items-->
          <div class="row justify-center">
            <div class="col-xs-12 col-sm-4 col-lg-3 col-md-4 q-pa-md text-black" v-for="i in news.normal">
              <NewsCard
                :date="i.date"
                :image="i.image"
                :link="i.link"
                :title="i.title"
                posted-by=""
              />
            </div>
          </div>

        </div>

      </div>

    </template>
  </Layer>
</template>

<script>
    import Layer from "./Layer";
    import NewsCard from "./NewsCard";
    export default {
        name: "News",
      components: {NewsCard, Layer},
      data(){
          return {
            news:{
              important:[

                {
                  image:require('../assets/event_nvg.jpeg'),
                  title:'Sajid Nadiadwala and Matloob Khan at an event.',
                  date:'February 5, 2017',
                  link:'https://ektafilms.com/news'
                },
                {
                  image:require('../assets/judwa2news.jpg'),
                  title:'Suno Ganpati Bappa Morya was the mahurat shot for ‘Judwaa 2’ reveals the BTS',
                  date:'September 26, 2017 12:59 pm',
                  link:'https://www.thestatesman.com/entertainment/bollywood/suno-ganpati-bappa-morya-mahurat-shot-judwaa-2-reveals-bts-1502499543.html'
                }



              ],
              normal:[
                {
                  image:require('../assets/tigernews.jpg'),
                  title:'Tiger Shroff and Sajid Nadiadwala look suave and dapper as they pose for FHM magazine',
                  date:' 19 Mar 2020',link:'https://www.nadiadwalagrandson.com/news/recent-news/tiger-shroff-and-sajid-nadiadwala-look-suave-and-dapper-they-pose-fhm-magazine'
                },
                {
                  image:require('../assets/nadiadvala_grandson_news.jpeg'),
                  title:'Nadiadwala Grandson Entertainment alter their iconic logo to promote social distancing',
                  date:' Mar 25, 2020',link:'https://www.bollywoodhungama.com/amp/news/features/nadiadwala-grandson-entertainment-alter-iconic-logo-promote-social-distancing/'
                },
                {
                  image:require('../assets/kick2news.jpg'),
                  title:'Kick 2: Salman Khan, Jacqueline Fernandez Starrer’s Script Locked By Sajid Nadiadwala',
                  date:' August 11, 2020 8:44 PM',
                  link:'https://www.india.com/entertainment/bollywood-news-kick-2-salman-khan-jacqueline-fernandez-starrers-script-locked-by-sajid-nadiadwala-4108688/'
                },
              ]
            }
          }
      }
    }
</script>

<style scoped>

</style>
