<template>
  <div class="row">
    <div class="col-12 text-left q-px-xl q-py-lg  text-h4">News</div>

    <div class="col-lg-4 col-sm-12 col-xs-12 col-md-4" v-for="i in news" >
      <NewsCard :image="i.image" :title="i.title" :body="i.body" :caption="i.caption"/>
      </div>
    </div>

</template>

<script>
import NewsCard from "components/news/NewsCard";
export default {
  name: "News",
  components: {NewsCard},
  data() {
    return {
      news:[
        {
          image:'https://cdn.discordapp.com/attachments/698188890615447592/759497312568344596/event_nvg.jpeg',
          title:'Sajid Nadiadwala and Matloob Khan at an event.',
          caption:'Producer Sajid Nadiadwala and Matloob Khan at a  party hosted for celebration in Juhu,Mumbai.',

        },
        {
          image:'https://cdn.discordapp.com/attachments/698188890615447592/759496151111696424/asdasdas.jpg',
          title:'News article about Matloob Khan.',
          caption:'Talking Business article about Khan’s recent visit to Mumbai.',

        },
        {
          image:'https://cdn.discordapp.com/attachments/698188890615447592/759495797393326090/unnamed.jpg',
          title:'News article about Matloob Khan.',
          caption:'News regarding Khan’s visit to Mumbai in 1998.',

        },
        {
          image:'https://cdn.discordapp.com/attachments/698188890615447592/759496159411830804/asdasda.jpg',
          title:'Matloob Khan wishes his friend Sajid Nadiadwala a very Happy Birthday.',
          caption:'Matloob Khan wishes a very Happy Birthday to Producer Sajid Nadiadwala in Bombay Times.',

        },

        {
          image:require('../assets/tigernews.jpg'),
          title:'Tiger Shroff and Sajid Nadiadwala look suave and dapper as they pose for FHM magazine',
          caption:' 19 Mar 2020',
          link:'https://www.nadiadwalagrandson.com/news/recent-news/tiger-shroff-and-sajid-nadiadwala-look-suave-and-dapper-they-pose-fhm-magazine'
        },
        {
          image:require('../assets/nadiadvala_grandson_news.jpeg'),
          title:'Nadiadwala Grandson Entertainment alter their iconic logo to promote social distancing',
          caption:' Mar 25, 2020',
          link:'https://www.bollywoodhungama.com/amp/news/features/nadiadwala-grandson-entertainment-alter-iconic-logo-promote-social-distancing/'
        },
        {
          image:require('../assets/kick2news.jpg'),
          title:'Kick 2: Salman Khan, Jacqueline Fernandez Starrer’s Script Locked By Sajid Nadiadwala',
          caption:' August 11, 2020 8:44 PM',
          link:'https://www.india.com/entertainment/bollywood-news-kick-2-salman-khan-jacqueline-fernandez-starrers-script-locked-by-sajid-nadiadwala-4108688/'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
