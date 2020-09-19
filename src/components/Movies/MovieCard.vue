<template>
  <q-card class="my-card"  :style="cWidth">
    <q-img :src="imageUrl" style="max-height: 280px;object-fit: cover"/>

    <q-card-section>
      <q-btn
        fab
        color="secondary"
        icon="play_arrow"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
        @click="seeTrailer"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ title }}
        </div>
      </div>

      <q-rating v-model="starRating" :max="5" size="32px"/>
      <div class="text-caption text-grey q-mt-md" >
        {{information}}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        Producer: {{ producer }}
      </div>
      <div class="text-subtitle1">
        Director: {{ producer }}
      </div>
      <div class="text-caption text-grey q-mt-sm">
        Cast: {{cast}}
      </div>
    </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    starRating: '',
    name: '',
    heading: '',
    information: '',
    imageUrl: '',
    producer: '',
    director: '',
    cast: '',
    trailerLink: ''
  },

  methods: {
    seeTrailer() {
      window.open(this.trailerLink, '_blank');
    }
  },


  computed: {
    cWidth() {
      if (this.$q.screen.lg || this.$q.screen.xl)
        return {minWidth: '580px'}

    }
  }
}
</script>

<style scoped>

</style>
