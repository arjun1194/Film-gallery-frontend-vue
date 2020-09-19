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
          information:'Devi Lal Singh, a typical youth with an anomalous standard of living, tries to find pleasure in whatever he does. He eventually becomes a thief and dons a new name, Devil. ',
          producer:'Sajid Nadiadwala',
          director:'Sajid Nadiadwala',
          cast:'Salman Khan, Jacqueline Fernandez',
          imageUrl:require('assets/kick_poster.jpg'),
          trailerLink:'https://youtu.be/u-j1nx_HY5o'
        },
        {
          name:'Mujhse Shaadi',
          heading:'Mujhse Shaadi Karogi',
          topSubHeading:'Visit the site to see More details',
          information:'Sameer, fast at losing his temper is re-located to Goa where he falls in love with Rani. But Sameer\'s new roommate Sunny, has some plans of his own.',
          producer:'Sajid Nadiadwala',
          director:'David Dhawan',
          cast:'Salman Khan, Akshay Kumar',
          imageUrl:require('assets/mujhse_shaadi_banner.jpg'),
          trailerLink:'https://youtu.be/u-j1nx_HY5o'
        },
        {
          name:'Heyyy',
          heading:'Heyy Babyy',
          topSubHeading:'OWN IT ON 4K ULTRA HD, BLU-RAY, DVD & DIGITAL NOW.',
          information:'Three bachelors who are compulsive womanizers find their lives turned upside down when a baby is left at their doorstep. The trio suspect each other of being the father.',
          imageUrl:require('assets/heyy_baby_banner.jpg'),
          producer:'Sajid Nadiadwala',
          director:'Sajid Khan',
          cast:' Akshay Kumar, Fardeen Khan, Riteish Deshmukh',
          trailerLink:'https://youtu.be/4AF-IQAMmnI'
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
