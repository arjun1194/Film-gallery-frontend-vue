<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="q-pa-md" reveal elevated>
      <q-toolbar>
        <q-btn v-if="isMobile" flat dense round icon="menu" aria-label="Menu" @click="toggleDrawer"/>
        <q-toolbar-title>Ekta Films</q-toolbar-title>
        <q-btn v-if="!isMobile" v-for="button in sideButtons"
               @click="(button.routeType==='scroll')?handleScroll(button.route):gotoRoute(button.route)" class="q-pa-sm"
               :label="button.label" :key="button.id" dense flat/>
        <q-btn v-if="!isMobile" to="/contact-us" class="q-pa-sm" label="contact us" dense flat/>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {scroll} from 'quasar'

const {getScrollTarget, setScrollPosition} = scroll
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {},

  data() {
    return {
      leftDrawerOpen: false,

      sideButtons: [
        {
          label: 'Home',
          route: '/',
          routeType: 'router'
        },
        {
          label: 'Movies',
          route: 'films',
          routeType: 'scroll'
        },
        {
          label: 'News',
          route: 'films',
          routeType: 'scroll'
        },
        {
          label: 'About',
          route: '/about',
          routeType: 'router'
        },

      ],

    }
  },
  created() {

    this.$q.dark.set(true)
  },
  methods: {
    toggleDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    gotoRoute(route) {
      this.$router.push(route)
    },
    handleScroll(id) {
      let target = getScrollTarget(this.$refs[id])
      let offset = this.$refs[id].offsetTop // do not subtract the el.scrollHeight here
      let duration = 1000
      setScrollPosition(target, offset, duration)
    },
    showContactDialog() {

    }
  },
  computed: {
    isMobile() {
      return this.$q.screen.xs
    }
  }
}
</script>
