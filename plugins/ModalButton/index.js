new Vue({
    el: '#app',
    data: () => ({
      dropdown_icon: [
        { text: 'correct', callback: () => console.log('редактировать') },
       { text: 'delete', callback: () => console.log('удалить') }
      ],
    }),
  });
  
  export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true;


        Vue.prototype.$modal = {
            EvantBus: new Vue(),


            show(name, setting) {
                this.EvantBus.$emit("show", { name, setting });
            },
            hide() {
                this.EvantBus.$emit("hide")
            },
        };
    },
};
