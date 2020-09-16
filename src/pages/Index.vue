<template>
  <q-page class="">
    <ImageCarousel :details="details"/>
    <Films ref="films"/>
    <News ref="news"/>
    <Contact/>
    <MainFooter ref="footer"/>
  </q-page>
</template>

<script>
import ImageCarousel from "../components/ImageCarousel";
import FilmCard from "../components/FilmCard";
import Films from "../components/Films";
import News from "../components/News";
import MainFooter from "../components/MainFooter";
import Contact from "../components/Contact";
export default {
  name: 'PageIndex',
  components: {Contact, MainFooter, News, Films, FilmCard, ImageCarousel},
  data () {
    return {
      details:[
        {
          name:'Kick',
          heading:'Kick',
          topSubHeading:'OWN IT ON 4K ULTRA HD, BLU-RAY, DVD & DIGITAL NOW.',
          information:'Devi Lal Singh, a typical youth with an anomalous standard of living, tries to find pleasure in whatever he does. He eventually becomes a thief and dons a new name, Devil',
          imageUrl:require('assets/kick_poster.jpg'),
          trailerLink:'https://youtu.be/u-j1nx_HY5o'
        },
        {
          name:'Mujhse Shaadi',
          heading:'Mujhse Shaadi Karogi',
          topSubHeading:'Visit the site to see More details',
          information:'Sameer, fast at losing his temper is re-located to Goa where he falls in love with Rani. But Sameer\'s new roommate Sunny, has some plans of his own.',
          imageUrl:require('assets/mujhse shaadi karogi.jpg'),
          trailerLink:'https://youtu.be/u-j1nx_HY5o'
        },
        {
          name:'Kick',
          heading:'Kick',
          topSubHeading:'OWN IT ON 4K ULTRA HD, BLU-RAY, DVD & DIGITAL NOW.',
          information:'Devi Lal Singh, a typical youth with an anomalous standard of living, tries to find pleasure in whatever he does. He eventually becomes a thief and dons a new name, Devil',
          imageUrl:require('assets/kick_poster.jpg'),
          trailerLink:'https://youtu.be/u-j1nx_HY5o'
        },
      ]

    }
  }
}
</script>
<style>

  .custom-button{
    border:1px solid white;
  }
</style>
