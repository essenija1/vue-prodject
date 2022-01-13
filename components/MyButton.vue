<template>
  <div>
    <div class="icon">
      <slot name="icon" />
    </div>
    <button><slot name="default" v-bind:props="upperCaseText">Жми</slot></button>
  </div>
</template>
<script>
export default {
  props: ["text"],
  data() {
    return {};
  },
  methods: {
    //onClick() {
    //this.$emit("click");
    // },
  },
  computed: {
      upperCaseText() {
        return "1234"
      }
  },
  //beforeCreate () {
  //console.log('beforeCreate')
  //},
  //created() {
  //  console.log('created')
  //},
  //beforeMount() {
  //console.log('beforeMount')
  //},
  //mounted() {
  //  console.log('mounted')
  //   const btn = this.$el.querySelector('button')
  //   if (btn) {
  //  btn.addEventListener('mouseover', this.onMouseOver)
  //}
  //},
  //beforeUpdate() {
  //    console.log('beforeUpdate');
  ///},
  //update() {
  //    console.log('updated')
  //},

  //beforeDestroy()
  //{
  //  const btn = this.$el.querySelector('button')
  //  if (btn) {
  //  btn.removeEventListener('mouseover', this.onMouseOver)
  //  }
  //},

  //destroyed()
  //{
  //console.log('destroyed')
  //},
};
</script>
<style scoped>
.btn{
  display: flex;
}
</style>
