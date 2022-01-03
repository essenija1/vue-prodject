<template>
  <div>about<button @click="openModal">Open</button></div>
</template>

<script>
export default {
  name: "About",
  methods: {
    openModal() {
    this.$modal.show('Auth', {
      content: 'auth',
      header: 'Auth From'
    });
   },
  },
};
</script>
<style>
</style>
