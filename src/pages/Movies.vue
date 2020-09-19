<template>
 <q-page>
   <div class="row justify-center">
     <MovieCard
       class="col-lg-3 col-sm-12 col-xs-12 q-mx-md q-my-sm"
       v-for="i in movieData"
       :star-rating="i.starRating"
       :image-url="i.imageUrl"
       :cast="i.cast"
       :director="i.director"
       :producer="i.producer"
       :information="i.information"
       :heading="i.heading"
       :name="i.name"
       :trailer-link="i.trailerLink"
        />
   </div>
 </q-page>
</template>

<script>
import MovieCard from "components/Movies/MovieCard";
export default {
name: "Movies",
  components: {MovieCard},
  data(){
  return {
    movieData:[
      {
        starRating: 3,
        name: 'heropanti',
        heading: 'Heropanti',
        information: 'A man loves a woman, whose family does not believe in love.',
        imageUrl: require('../assets/heropanti.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'Sabir Khan',
        cast: 'Tiger Shroff, Kriti Sanon',
        trailerLink: 'https://youtu.be/y1xAeENTPhQ'
      },
      {
        starRating: 4,
        name: 'mujhse_shadi_karogi',
        heading: 'Mujhse Shaadi Karogi',
        information: "Sameer, fast at losing his temper is re-located to Goa where he falls in love with Rani. But Sameer's new roommate Sunny, has some plans of his own.",
        imageUrl: require('../assets/mujhse shaadi karogi.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'David Dhawan',
        cast: 'Salman Khan, Akshay Kumar, Priyanka Chopra',
        trailerLink: 'https://youtu.be/cS0EvFfIHIo'
      },
      {
        starRating: 4,
        name: 'hey_babyy',
        heading: 'Heyy Babyy',
        information: "Three bachelors who are compulsive womanizers find their lives turned upside down when a baby is left at their doorstep. The trio suspect each other of being the father.",
        imageUrl: require('../assets/heyy baby.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'Sajid Khan',
        cast: 'Akshay Kumar, Fardeen Khan, Riteish Deshmukh',
        trailerLink: 'https://youtu.be/b_rV7pj49JE'
      },
      {
        starRating: 3,
        name: 'jann_e_mann',
        heading: 'Jaan-E-Mann',
        information: "Follows a love triangle between Agastya, Suhaan and Piya.",
        imageUrl: require('../assets/jaaneman.png'),
        producer: 'Sajid Nadiadwala',
        director: 'Shirish Kunder',
        cast: 'Salman Khan, Akshay Kumar, Preity Zinta',
        trailerLink: 'https://youtu.be/pcqRWoA7dig'
      },
      {
        starRating: 3,
        name: 'har_dil_jo_pyar_karega',
        heading: 'Har Dil Jo Pyaar Karega',
        information: "Raj is a struggling singer with big dreams who is still waiting for his big break.",
        imageUrl: require('../assets/har dil jo pyaar karega.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'Raj Kanwar',
        cast: 'Salman Khan, Preity Zinta',
        trailerLink: 'https://youtu.be/moNQw6IlFjM'
      },
      {
        starRating: 4,
        name: 'judwa',
        heading: 'Judwaa',
        information: "Twin brothers who are separated soon after birth, meet in adulthood and join forces to defeat their common enemy, a notorious criminal.",
        imageUrl: require('../assets/judwaa.png'),
        producer: 'Sajid Nadiadwala',
        director: 'David Dhawan',
        cast: 'Salman Khan, Karisma Kapoor, Rambha',
        trailerLink: 'https://youtu.be/odN6O5p0VRs'
      },
      {
        starRating: 3,
        name: 'judwa_2',
        heading: 'Judwaa 2',
        information: "Prem and Raja are twin brothers who are seperated at birth but are uniquely connected to eachother via their reflexes. They reunite as adults and set out to take down the underground smuggling world.",
        imageUrl: require('../assets/judwaa 2.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'David Dhawan',
        cast: 'Varun Dhawan, Jacqueline Fernandez, Taapsee Pannu',
        trailerLink: 'https://youtu.be/8vgZXE32tpA'
      },
      {
        starRating: 3,
        name: 'jeet',
        heading: 'Jeet',
        information: "The story of a hitman who kills for the mob, but on one job he falls madly in love with a girl, who happens to be the beautiful daughter of an associate.",
        imageUrl: require('../assets/jeet.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'Raj Kanwar',
        cast: 'Sunny Deol, Karisma Kapoor, Salman Khan',
        trailerLink: 'https://youtu.be/cS0EvFfIHIo'
      },
      {
        starRating: 4,
        name: 'kick',
        heading: 'Kick',
        information: "Devi Lal Singh, a typical youth with an anomalous standard of living, tries to find pleasure in whatever he does. He eventually becomes a thief and dons a new name, Devil.",
        imageUrl: require('../assets/kick.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'Sajid Nadiadwala',
        cast: 'Salman Khan, Jacqueline Fernandez ',
        trailerLink: 'https://youtu.be/u-j1nx_HY5o'
      },

      {
        starRating: 3,
        name: 'diljale',
        heading: 'Diljale',
        information: "Raja Saab, unaccepting of his daughter's relationship with Shyam, defames and murders Shyam's father. Years later, Shyam returns in search of vengeance.",
        imageUrl: require('../assets/jeet.jpg'),
        producer: 'Harry Baweja',
        director: 'Harry Baweja',
        cast: 'Ajay Devgan, Sonali Bendre',
        trailerLink: 'https://youtu.be/TuHJdwb-4Q8'
      },
      {
        starRating: 3,
        name: 'kambakkht_ishq',
        heading: 'Kambakkht Ishq',
        information: "Simrita, a doctor, performs her first surgery on Viraj, a man she hates. She soon realises that she accidentally left her watch inside his body and must do whatever it takes to save her career.",
        imageUrl: require('../assets/kambakht ishq.jpg'),
        producer: 'Sajid Nadiadwala',
        director: 'Sabbir Khan',
        cast: 'Akshay KUmar, Kareena Kapoor',
        trailerLink: 'https://youtu.be/dHaS-D85Oso'
      },
      {
        starRating: 3,
        name: 'vijaypath',
        heading: 'Vijaypath',
        information: "When a criminal is sentenced to death by Justice Saxena, Dilawar Singh, the gangster's brother, takes revenge by killing the judge's family and his driver. The driver's son vows to settle the score.",
        imageUrl: require('../assets/vijaypath.jpg'),
        producer: 'Dhirajlal Shah',
        director: 'SFarogh Siddique',
        cast: 'Ajay Devgan, Tabu',
        trailerLink: 'https://youtu.be/dHaS-D85Oso'
      }
    ]

  }
  }
}
</script>

<style scoped>

</style>
