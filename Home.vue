<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <calculator />
    <hr />
    <my-button v-if="show"/>
    <button @click="show=!show">Show/Hide</button>
    
  </div>
</template>


<script>
// @ is an alias to /src
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import Calculator from '@/components/Calculator.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from '@/components/MyButton.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Calculator,
    MyButton,
    AddPaymentForm
  },
  data() {
    return{
      show: true
    }
  },
};
</script>
