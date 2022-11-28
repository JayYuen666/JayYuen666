export default {
  npmClient: 'yarn',
  apiRoute: {
    platform: 'vercel'
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
    { path: '/posts/create', component: 'posts/create' },
    { path: '/login', component: 'login' },
    { path: '/posts/:postId', component: 'posts/post' },
  ],
};
