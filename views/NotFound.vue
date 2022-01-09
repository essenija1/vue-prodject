<template>
  <div>
    not found
    <calculator />
   <!--<router-link
    :to="{
       name: 'addPayment',
        params: {
        category: 'Education',
       },
      query: { value: 200 },
      }"
     >Add Education</router-link>-->
  </div>
</template>

<script>
import Calculator from '../components/Calculator.vue'
export default {
  components: { Calculator }
};
</script>
<style>
</style>
