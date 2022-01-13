//import Vue from "vue"


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
