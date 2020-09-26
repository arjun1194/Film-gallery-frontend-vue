<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-black q-py-md q-pl-sm " reveal elevated>
      <q-toolbar>
        <q-btn v-if="isMobile" flat dense round icon="menu" aria-label="Menu" @click="toggleDrawer"/>
        <q-toolbar-title>
          <q-btn size="lg" class="something" label="EKTA FILMS" flat to="/"/>
          <q-avatar square  to="/">
              <img src="../assets/bestest.jpg">
          </q-avatar>
        </q-toolbar-title>
        <q-btn v-if="!isMobile" v-for="button in sideButtons"
               @click="gotoRoute(button.route)" class="q-pa-sm"
               :label="button.label" :key="button.id" dense flat/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-8"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(sideItem, index) in sideButtons">
            <q-item :key="index" clickable :active="index === selectedItem" v-ripple  @click="sideItemOnClick(index,sideItem.route)">
              <q-item-section>
                {{sideItem.label}}
              </q-item-section>
            </q-item>

          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>


    <q-page-container>
      <router-view/>
      <main-footer/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {scroll} from 'quasar'
import MainFooter from "components/MainFooter";

const {getScrollTarget, setScrollPosition} = scroll

export default {
  name: 'MainLayout',

  components: {MainFooter},

  data() {
    return {
      leftDrawerOpen: false,
      drawer:false,
      selectedItem:0,


      sideButtons: [
        {
          label: 'Home',
          route: '/',
        },
        {
          label: 'Movies',
          route: '/movies',
        },
        {
          label: 'News',
          route: '/award',
        },
        {
          label: 'Awards',
          route: '/awards',
        },
        {
          label: 'About',
          route: '/about',
        },
        {
          label: 'Contact Us',
          route: '/contact-us',
        },


      ],

    }
  },
  created() {

    this.$q.dark.set(true)
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    sideItemOnClick(index,route){
      this.selectedItem = index
      this.gotoRoute(route)
    },
    gotoRoute(route) {
      this.$router.push(route)
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
