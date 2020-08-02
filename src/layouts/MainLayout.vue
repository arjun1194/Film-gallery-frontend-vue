<template>
  <q-layout  view="lHh Lpr lFf">

    <q-header class="q-pa-md" reveal elevated >
      <q-toolbar>
        <q-btn v-if="isMobile" flat dense round icon="menu" aria-label="Menu" @click="toggleDrawer"/>
        <q-toolbar-title>Ekta Films</q-toolbar-title>
        <q-btn v-if="!isMobile" v-for="button in sideButtons" @click="(button.routeType==='scroll')?handleScroll(button.route):gotoRoute(button.route)" class="q-pa-sm" :label="button.label" :key="button.id" dense flat/>
        <q-btn v-if="!isMobile"  @click="showContactDialog" class="q-pa-sm" label="contact us" dense flat/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above v-if="isMobile" bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label
          header
          class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import { scroll } from 'quasar'
  const { getScrollTarget, setScrollPosition } = scroll
  import EssentialLink from 'components/EssentialLink.vue'
  import ContactUsDialog from "../components/ContactUsDialog";

  export default {
    name: 'MainLayout',

    components: {
      ContactUsDialog,
      EssentialLink
    },

    data() {
      return {
        leftDrawerOpen: false,
        essentialLinks: [
          {
            title: 'Docs',
            caption: 'quasar.dev',
            icon: 'school',
            link: 'https://quasar.dev'
          },
          {
            title: 'Github',
            caption: 'github.com/quasarframework',
            icon: 'code',
            link: 'https://github.com/quasarframework'
          },
          {
            title: 'Discord Chat Channel',
            caption: 'chat.quasar.dev',
            icon: 'chat',
            link: 'https://chat.quasar.dev'
          },
          {
            title: 'Forum',
            caption: 'forum.quasar.dev',
            icon: 'record_voice_over',
            link: 'https://forum.quasar.dev'
          },
          {
            title: 'Twitter',
            caption: '@quasarframework',
            icon: 'rss_feed',
            link: 'https://twitter.quasar.dev'
          },
          {
            title: 'Facebook',
            caption: '@QuasarFramework',
            icon: 'public',
            link: 'https://facebook.quasar.dev'
          },
          {
            title: 'Quasar Awesome',
            caption: 'Community Quasar projects',
            icon: 'favorite',
            link: 'https://awesome.quasar.dev'
          }
        ],
        sideButtons: [
          {
            label: 'Home',
            route:'/',
            routeType:'router'
          },
          {
            label: 'Movies',
            route:'films',
            routeType: 'scroll'
          },
          {
            label: 'News',
            route:'films',
            routeType: 'scroll'
          },
          {
            label: 'About',
            route:'/about',
            routeType:'router'
          },

        ],

      }
    },
    created() {

      this.$q.dark.set(true)
    },
    methods:{
      toggleDrawer(){
        this.leftDrawerOpen = !this.leftDrawerOpen
      },
      gotoRoute(route){
        this.$router.push(route)
      },
      handleScroll (id) {
        let target = getScrollTarget(this.$refs[id])
        let offset = this.$refs[id].offsetTop // do not subtract the el.scrollHeight here
        let duration = 1000
        setScrollPosition(target, offset, duration)
      },
      showContactDialog(){
        this.$q.dialog({
          component: ContactUsDialog,

            // optional if you want to have access to
            // Router, Vuex store, and so on, in your
            // custom component:
            parent: this, // becomes child of this Vue node
                          // ("this" points to your Vue component)
                          // (prop was called "root" in < 1.1.0 and
                          // still works, but recommending to switch
                          // to the more appropriate "parent" name)

            // props forwarded to component
            // (everything except "component" and "parent" props above):
            text: 'something',
        }).onOk(data => {
          // console.log('>>>> OK, received', data)
        }).onCancel(() => {
          // console.log('>>>> Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }
    },
    computed: {
      isMobile() {
        return this.$q.screen.xs
      }
    }
  }
</script>
