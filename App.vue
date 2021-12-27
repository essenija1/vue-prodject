<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">dashboard</router-link> /
        <router-link to="/about">about</router-link> /
        <span @click="goToPageNotFound">notfound</span>

        <!-- <div class="title">My personal costs</div>
     <div class="title" v-if="total"> Total: {{total}}</div>-->
      </header>
      <main>
        <router-view />
        <!--<dashboard v-if="page === 'dashboard'" />
        <about v-else-if="page === 'about'" />
        <not-found v-else />-->
        <!-- <add-payment-form />
       <payments-display :items="paymentsList"/>
       <pagination :cur="page" :n="n" :length="paymentsList.length" @paginate="changePage"/>-->
      </main>
    </div>
    <router-view />
    <calculator />
    <header></header>
  </div>
</template>
<script>
//import PaymentsDisplay from './components/PaymentsDisplay.vue';
//import AddPaymentForm from './components/AddPaymentForm.vue';
//import Pagination from "./components/Pagination.vue";
//import { mapMutations, mapGetters, mapActions } from 'vuex'
//import Dashboard from "./views/Dashboard.vue";
//import About from "./views/About.vue";
//import NotFound from "./views/NotFound.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    goToPageNotFound() {
      if(this.$route.name === 'notfound') return
      this.$router.push({
        name:"notfound"
      });
    },
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
}
</style>
