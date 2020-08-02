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
          name:'first',
          heading:'The Invisible man',
          topSubHeading:'OWN IT ON 4K ULTRA HD, BLU-RAY, DVD & DIGITAL NOW.',
          imageUrl:'https://www.universalstudios.com/uploads/24805.jpg',
          trailerLink:''
        },
        {
          name:'second',
          heading:'The Fountain',
          topSubHeading:'WATCH TRAILER NOW.',
          imageUrl:'https://www.universalstudios.com/uploads/38740.jpg',
          trailerLink:''
        },
        {
          name:'third',
          heading:'The Visible Man',
          topSubHeading:'OWN IT ON 4K ULTRA HD, BLU-RAY, DVD & DIGITAL NOW.',
          imageUrl:'https://www.universalstudios.com/uploads/56979.jpg',
          trailerLink:''
        }
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
