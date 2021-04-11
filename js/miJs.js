const ref = Vue.ref
const app = Vue.createApp({
  setup () {
    const leftDrawerOpen = ref(false)
    const gif = ref('Motos')
    const urlgif = ref()
    async function searchGif(){
      let request = await axios('https://api.giphy.com/v1/gifs/search?q='+gif+'&api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&limit=4')
      urlgif.value = request.data.data
    }
    return {
      searchGif,
      gif, urlgif,
      leftDrawerOpen,
      state, // store.js
      actions,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})


const Home = { template: pages.myRender() },
      // Js = { template: pages.createRender(state.Js) },
      Github = { template: pages.createRender(state.Github) },
      Linux = { template: pages.createRender(state.Linux) },
      Arch = { template: pages.createRender(state.Arch) },
      Variables_de_entorno = { template: pages.createRender(state.Variables_de_entorno) },
      Sublime = { template: pages.createRender(state.Sublime) },
      Herramientas = { template: pages.createRender(state.Herramientas) },
      MiVirtual = { template: pages.createRender(state.MiVirtual) };

const routes = [
  { path: '/', component: Home },
  { path: '/Linux', component: Linux },
  { path: '/Arch_Linux', component: Arch },
  { path: '/Sublime', component: Sublime },
  { path: '/Herramientas', component: Herramientas },
  { path: '/MiVirtual', component: MiVirtual },
  // { path: '/JavaScript', component: Js },
  { path: '/Github', component: Github },
  { path: '/Variables de entorno', component: Variables_de_entorno },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

app.use(router).use(Quasar).mount('#app')