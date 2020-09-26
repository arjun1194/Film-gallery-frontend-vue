<template>
  <div class="q-pa-sm bg-black text-center">
    <div class=" text-subtitle1 text-white q-pa-sm ">© {{ new Date().getFullYear() }} Ekta Films. All Rights Reserved.
    </div>
    <div class=" text-subtitle1  q-pa-sm ">
      <q-icon name="fa fa-facebook-square" class="text-primary q-mx-sm text-white" style="font-size: 32px;"
              @click.native="nav('https://facebook.com/NGEMovies/')"/>
      <q-icon name="fa fa-instagram" class="text-primary q-mx-sm text-white" style="font-size: 32px;"
              @click.native="nav(' https://instagram.com/nadiadwalagrandson')"/>
      <q-icon name="fa fa-youtube-play" class="text-primary q-mx-sm text-white" style="font-size: 32px;"
              @click.native="nav('https://www.youtube.com/c/NadiadwalaGrandson')"/>
    </div>
    <div class=" text-subtitle1 text-white q-pa-sm">
      <div class="row justify-center">
        <div class="text-grey-7">
          <q-icon  name="fa fa-code" class="text-primary  q-mx-sm text-white" style="font-size: 32px;"/>
          Created and Maintained by <a :href="phone" class="text-blue-grey-7">0xTeamNull</a>
        </div>
      </div>
      <div class="row justify-center">
        <div class="text-grey-7">
          Contact Us<a href="mailto:arjunbhd1194@gmail.com" class="text-blue-grey-7"> here</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data(){
    return {
      phone:'tel:8447692074'
    }
  },
  methods: {
    nav(str) {
      window.location.href = str
    }
  }
}
</script>

<style scoped>

</style>

