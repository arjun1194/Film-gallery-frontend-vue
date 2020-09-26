<template>
  <div>
        <div class="row" style="">
        <div class="col-12 text-left q-px-xl q-py-lg  text-h4">Awards</div>
      <q-splitter class="col-12" v-model="splitterModel" :limits="[20,20]">
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal">
            <q-tab  v-for="(award,year) in movies" :name="year" :label="year"/>
          </q-tabs>
        </template>
        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
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
import Award from "components/award/Award";
import AwardTabDetail from "components/award/AwardTabDetail";
export default {
  name: "News",
  components: {AwardTabDetail, Award},
  data() {
    return {

      tab: '2016',
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
          },
          {
            "movieName": "Dishoom",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/30-x-40_Walking_Merged--Twitter%20copy.jpg",
            "awards": [
              {
                "title": "Screen Award for Best Comedian",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/screen-award-logo_1_1.png",
                "awardee": "Varun Dhawan"
              }
            ]
          }
        ],
        "2015": [
          {
            "movieName": "2 States",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/2%20copy.jpg",
            "awards": [
              {
                "title": "IIFA Award for Best Cinematography",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Binod Pradhan"
              },
              {
                "title": "IIFA Award for Best Music Director",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Shankar–Ehsaan–Loy"
              }
            ]
          },
          {
            "movieName": "Tamasha",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/8%20copy.jpg",
            "awards": [
              {
                "title": "IIFA Award for Best Lyrics",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Irshad Kamil"
              },
              {
                "title": "IIFA Award for Best actor in leading role",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Ranbir Kapoor - Anjaana Anjaani"
              },
              {
                "title": "Mirchi Music Award for Listener's Choice Song of the Year",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/musicmirchi.jpg",
                "awardee": ""
              },
              {
                "title": "Zee Cine Award for Best Playback Singer",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/zee.jpg",
                "awardee": "Mohit Chauhan"
              },
              {
                "title": "Filmfare Award for Best Lyrics",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/filmfare_0.jpg",
                "awardee": "Irshad Kamil"
              },
              {
                "title": "Screen Award for Best Actor (Popular Choice)",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/screen-award-logo_1_1.png",
                "awardee": "Deepika Padukone"
              }
            ]
          }
        ],
        "2014": [
          {
            "movieName": "Kick",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/4%20copy.jpg",
            "awards": [
              {
                "title": "Big Star Entertainment Award for Most Entertaining Dancer",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/bigstar2.JPG",
                "awardee": "Jacqueline Fernandez"
              },
              {
                "title": "IIFA Award for Best Choreography",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Ahmed Khan"
              },
              {
                "title": "IIFA Award for Best special effects",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Prime Focus"
              },
              {
                "title": "IIFA Award for Debutant Director Of The Year",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Sajid Nadiadwala"
              },
              {
                "title": "Stardust Award for Biggest Grosser of 2014",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": ""
              },
              {
                "title": "Filmfare Award for Best Choreography",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/filmfare_0.jpg",
                "awardee": "Ahmed Khan"
              }
            ]
          },
          {
            "movieName": "Heropanti",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/30-x-40-girl-on-shoulder%20app%20mooochcha%20copy.jpg",
            "awards": [
              {
                "title": "Screen Award for Most Promising Newcomer",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/screen-award-logo_1_1.png",
                "awardee": "Tiger Shroff"
              },
              {
                "title": "Big Star Entertainment Award for Most Entertaining Actor Female",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/bigstar2.JPG",
                "awardee": "Kriti Sanon"
              },
              {
                "title": "Big Star Entertainment Award for Most Entertaining Actor Male",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/bigstar2.JPG",
                "awardee": "Tiger Shroff"
              },
              {
                "title": "Stardust Award for Superstar Of Tomorrow",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Tiger Shroff"
              },
              {
                "title": "Star Guild Award for Best Female Debut",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/guild%20copy.png",
                "awardee": "Kriti Sanon"
              },
              {
                "title": "Star Guild Award for Best Male Debut",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/guild%20copy.png",
                "awardee": "Tiger Shroff"
              },
              {
                "title": "IIFA Award for Star Debut Of The Year",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Kriti Sanon"
              },
              {
                "title": "IIFA Award for Star Debut Of The Year",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Tiger Shroff"
              },
              {
                "title": "IIFA Award for Star Debut Of The Year",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Tiger Shroff"
              },
              {
                "title": "Filmfare Award for Best Female Debut",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/filmfare_0.jpg",
                "awardee": "Kriti Sanon"
              }
            ]
          },
          {
            "movieName": "2 States",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/2%20copy.jpg",
            "awards": [
              {
                "title": "Filmfare Award for Best Debut Director",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/filmfare_0.jpg",
                "awardee": "Abhishek Varman"
              },
              {
                "title": "Filmfare Award for Best Music Director",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/filmfare_0.jpg",
                "awardee": "Shankar–Ehsaan–Loy"
              },
              {
                "title": "Screen Award for Best Marketing Film",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/screen-award-logo_1_1.png",
                "awardee": ""
              }
            ]
          },
          {
            "movieName": "Highway",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/1%20copy.jpg",
            "awards": [
              {
                "title": "PTC Punjabi Music Award for Best Punjabi Song Based in a Hindi Film",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/ptc.png",
                "awardee": "Sultana & Jyoti Nooran"
              },
              {
                "title": "GiMA Award for Best Film Album",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/gima_award.png",
                "awardee": " A. R. Rahman"
              },

              {
                "title": "Filmfare Award for Best Actress (Critic's choice)",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/filmfare_0.jpg",
                "awardee": "Alia Bhatt - 2 States"
              },
              {
                "title": "Screen Award for Best Playback Singer Female",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/screen-award-logo_1_1.png",
                "awardee": "Sultana & Jyoti Nooran"
              },
              {
                "title": "Star Guild Award for The Guild Presidents Awards",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/guild%20copy.png",
                "awardee": "Alia Bhatt"
              },
              {
                "title": "Stardust Award for New Talent Awards Superstar of Tomorrow",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Alia Bhatt - 2 States"
              },
              {
                "title": "Stardust Award for Best Director (Searchlight Awards)",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Imtiaz Ali"
              },
              {
                "title": "Stardust Award for Best Actor (Searchlight Awards)",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": " Randeep Hooda - Kick"
              }
            ]
          }
        ],
        "2012": [
          {
            "movieName": "Housefull 2",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/hf2_white_standee_4ft-6ft_verticle%2030.1%20copy.jpg",
            "awards": [
              {
                "title": "Stardust Award for Actor of the year - Male",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Akshay Kumar - Heyy Babyy"
              },
              {
                "title": "Stardust Award for Best Supporting Actor",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Shahzahn Padamsee"
              },
              {
                "title": "Zee Cine Award for Power Club - Box Office Award",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/zee.jpg",
                "awardee": "Sajid Khan"
              }
            ]
          }
        ],
        "2011": [
          {
            "movieName": "Housefull",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/housefullposter.jpg",
            "awards": [
              {
                "title": "Stardust Award for Best Actor in Comedy or Romance",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Akshay Kumar - Heyy Babyy"
              },
              {
                "title": "Stardust Award for Best Film in Comedy or Romance",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Sajid Nadiadwala"
              }
            ]
          }
        ],
        "2010": [
          {
            "movieName": "Housefull",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/housefullposter.jpg",
            "awards": [
              {
                "title": "IIFA Award for Best Performance in comic role",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Riteish Deshmukh - Heyy Babyy"
              },
              {
                "title": "Stardust Award for Best Supporting Actor",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Arjun Rampal"
              },
              {
                "title": "Stardust Award for Star Of The Year Male",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Akshay Kumar - Heyy Babyy"
              }
            ]
          }
        ],
        "2007": [
          {
            "movieName": "Heyy Babyy",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/HeyBabyy%20copy.jpg",
            "awards": [
              {
                "title": "Stardust Award for Actor of the year - Male",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Akshay Kumar - Heyy Babyy"
              }
            ]
          }
        ],
        "2004": [
          {
            "movieName": "Mujhse Shaadi Karogi",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/MujhseShaadiKarogiposter.jpg",
            "awards": [
              {
                "title": "Screen Award for Best Art Direction",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/screen-award-logo_1_1.png",
                "awardee": "Sharmishta Roy"
              },
              {
                "title": "Stardust Award for Superstar Of Tomorrow",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/stardust.png",
                "awardee": "Priyanka Chopra - Anjaana Anjaani"
              },{
                "title": "IIFA Award for Best Costume Designer",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Vikram Phadnis"
              },{
                "title": "IIFA Award for Best Choreography",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": " Farah Khan"
              },{
                "title": "IIFA Award for Best Background Score",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Salim–Sulaiman"
              },
              {
                "title": "IIFA Award for Best Art Direction",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Sharmishta Roy"
              },{
                "title": "IIFA Award for Best Performance in comic role",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/iifa_1.jpg",
                "awardee": "Akshay Kumar - Heyy Baby"
              },{
                "title": "Global Indian Films Award for Best Costume Designer",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/globalindiafilmaward.png",
                "awardee": "Vikram Phadnis"
              },{
                "title": "Global Indian Films Award for Best Supporting Actor",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/globalindiafilmaward.png",
                "awardee": "Akshay Kumar - Heyy Babyy"
              }
            ]
          }
        ],
        "2000": [
          {
            "movieName": "Har Dil Jo Pyar Karega",
            "poster": "https://www.nadiadwalagrandson.com/sites/default/files/MoviePoster/HarDilJoPyarKarega%20copy.jpg",
            "awards": [
              {
                "title": "Global Indian Films Award for Best Playback Singer",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/globalindiafilmaward.png",
                "awardee": "Preeti Pinky"
              },
              {
                "title": "Aashirwad Award for Best Actress",
                "awardPhoto": "https://www.nadiadwalagrandson.com/sites/default/files/AwardImage/AASHIRWAD-RAJBHASHA-PURASKAR.jpeg",
                "awardee": "Rani Mukerji - Har Dil Jo Pyar Karega"
              }
            ]
          }
        ]
      }


    }
  }
}
</script>

<style scoped>

</style>
