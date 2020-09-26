
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/contact-us', component: () => import('pages/ContactUs.vue') },
      { path: '/movie/1', component: () => import('pages/FilmDetail') },
      { path: '/movies', component: () => import('pages/Movies') },
      { path: '/awards', component: () => import('pages/Awards.vue') },
      { path: '/award', component: () => import('pages/News.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
