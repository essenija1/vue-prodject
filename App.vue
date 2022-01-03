<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">dashboard</router-link> /
        <router-link to="/about">about</router-link> /
        <span @click="goToPageNotFound">notfound</span>
      </header>
      <main>
        <router-view />
        <calculator />
      </main>
      <transition name="fade">
      <modal-window-add-payment-form 
      :settings="setting" 
      :componentName = "componentName"
      v-if="componentName" />
      </transition>
    </div>
  </div>
</template>

<script>
//import ModalWindowAddPaymentForm from './components/ModalWindowAddPaymentForm.vue';
export default {
  components: { ModalWindowAddPaymentForm: () =>import(/*webpackChunkName: "Modal"*/'./components/ModalWindowAddPaymentForm.vue') },
  name: "App",
  data() {
    return {
      modalShow: false,
      setting: {},
      componentName: ''
    };
  },
  methods: {
    goToPageNotFound() {
      if(this.$route.name === 'notfound') return
      this.$router.push({
        name:"notfound"
      });
    },
    onShow({name, setting}) {
        this.componentName = name
        this.settings = settings
    },
    onHide() {
      this.setting = {}
        this.componentName = ''
    },
  },
  mounted () {
    this.$modal.Eventbus.$on('show')
    this.$modal.Eventbus.$on('hide')
  },
beforeDestroy () {
    this.$modal.Eventbus.$off('show')
    this.$modal.Eventbus.$off('hide')
  },

  created() {
    this.$modal.show()
    this.$modal.hide()
  },
};
  //methods: {
    //setPage() {
    //  this.page = location.pathname.slice(1);
 //   },
 // },
 // mounted() {
  //  this.setPage();
  //  const links = document.querySelectorAll('a');
   // links.forEach(links=>{
   //    link.addEventListener('click', event=>{
    //     event.preventDefault();
     //    history.pushState({}, '', link.href);
     //    this.setPage();
   //    });
   // });
  //  this.setPage();
  //  window.addEventListener("popstate", () => {
  //    this.setPage();
 // //  });
 // },
//};
//computed: {
// ...mapGetters({paymentsList: 'getPaymentsList'}),
// total(){
//   return this.$store.getters.getPaymentsListFullValuePrice
// }
//},
//methods: {
// changePage(p) {
//   this.page = p
// },
// ...mapActions(['fetchData']),
// ...mapMutations({fetch: "setPaymentsListData"}),
// fetchData () {
//return [
//{
//date: '20.12.2021',
//category: 'Food',
//value: 169,
//},
//{
//date: '20.12.2021',
//category: 'Transport',
//value: 360,
//},
//{
//date: '20.12.2021',
//category: 'Food',
//value: 532,
//},
//];
//},
//},
//addToPaymentList(props) {
//    console.log('run')
//  this.paymentsList = [...this.paymentsList, props]
//},
//created() {
//    this.fetchData();
//this.$store.commit('setPaymentsListData', this.fetchData());
//this.fetch(this.fetchData());
// this.$store.dispatch('fetchData')
//}
//};

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  h1 {
    font-size: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
