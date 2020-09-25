<template>
  <div>
      <div class="row" style="height: 93.5vh">
      <q-splitter class="col-12" v-model="splitterModel">
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal">
            <q-tab v-for="(award,year) in movies" :name="year" :label="year"/>
          </q-tabs>
        </template>
        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up">
            <q-tab-panel v-for="(award,year) in movies" :name="year">
              <AwardTabDetail  v-for="i in award" :year="year" :poster="i.poster" :movie-name="i.movieName" :awards="i.awards" />
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </div>

  </div>

</template>

<script>
import Award from "components/news/Award";
import AwardTabDetail from "components/news/AwardTabDetail";
export default {
  name: "News",
  components: {AwardTabDetail, Award},
  data() {
    return {

      tab: '1',
      splitterModel: 1,
      movies: {
        "2019": [
          {
            "movieName": "Baaghi 2",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/Baaghi2-New-Poster%20copy.jpg",
            "awards": [
              {
                "title": "Zee Cine Award for Best Action",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/zee.jpg",
                "awardee": ""
              }
            ]
          }
        ],
        "2018": [
          {
            "movieName": "Baaghi 2",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/Baaghi2-New-Poster%20copy.jpg",
            "awards": [
              {
                "title": "Star Screen Awards Award for Best Action",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/Star-Screen-Awards2.png",
                "awardee": ""
              }
            ]
          }
        ],
        "2017": [
          {
            "movieName": "Dishoom",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/30-x-40_Walking_Merged--Twitter%20copy.jpg",
            "awards": [
              {
                "title": "IIFA Award for Best Performance in comic role",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Varun Dhawan"
              }
            ]
          }
        ],
        "2016": [
          {
            "movieName": "Baaghi",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/Baaghi%20Poster%202%20FINAL%20copy.JPG",
            "awards": [
              {
                "title": "Stardust Award for Best Actor in a Negative Role",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Sudheer Babu Posani - Baaghi"
              }
            ]
          }
        ],
      }

  }
  }
}
</script>

<style scoped>

</style>
