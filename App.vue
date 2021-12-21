<template>
  <div id="app">
   <div class="wrapper"> 
    <header>
     <div class="title">My personal costs

     </div>
     </header>
     <main>
       <add-payment-form @addNewPayment="addToPaymentList" />
       <payments-display :items="paymentsList"/>
     </main>
   </div>
   <router-view/>
     <calculator />
     <header>

     </header>
  </div>
  
</template>
<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
export default {
components: {PaymentsDisplay, AddPaymentForm},
name: 'App',
data()
{
  return{
    show:true,
    paymentsList: []
  };
},
methods: {
  fetchData () {
return [
{
date: '20.12.2021',
category: 'Food',
value: 169,
},
{
date: '20.12.2021',
category: 'Transport',
value: 360,
},
{
date: '20.12.2021',
category: 'Food',
value: 532,
},
];
},
},
addToPaymentList(props) {
     console.log('run')
  // this.paymentsList.push(data),
   this.paymentsList = [...this.paymentsList, props]
},
created() {
  this.paymentsList = this.fetchData()
}
};
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
  h1{
    font-size: 20px;
  }

}
</style>
