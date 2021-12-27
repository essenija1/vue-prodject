<template>
<button @click="onClick">Clicked {{ counter }} times!</button>
</template>
<script>
export default {
data () {
return {
counter: 0,
}
},
methods: {
onClick () {
this.counter++
},
mouseOver(){
     console.log('Hovered on button')
}
},
beforeCreate () {
console.log('beforeCreate')
},
created() {
    console.log('created')
},
beforeMount() {
  console.log('beforeMount')
},
mounted() {
   console.log('mounted')
   const btn = this.$el.querySelector('button')
   if (btn) {
   btn.addEventListener('mouseover', this.onMouseOver)
}
},
beforeUpdate() {
     console.log('beforeUpdate');
},
update() {
    console.log('updated')
},

beforeDestroy()
{
   const btn = this.$el.querySelector('button')
   if (btn) {
   btn.removeEventListener('mouseover', this.onMouseOver)
   }
},

destroyed()
{
console.log('destroyed')
},
};
</script>
