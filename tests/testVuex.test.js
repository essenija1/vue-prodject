import { shallowMount, createLocalVue } from "@vue/test-utils";
import TestVuex from "./TestVuex.vue";
import Vuex from 'vuex';
import vueJest from "vue-jest";


const localVue = createLocalVue()
localVue.use(Vuex)

describe('Test vuex', ()=>{
    let actions
    let store
    beforeEach(()=>{
        actions = {
            addData: vueJest.fn()
        }
        store = new Vuex.Store({
            state: {
                data: ''
            },
            actions
        })
    })
    it('test action addData', async ()=>{
        const wrapper = shallowMount(TestVuex, {
            store, localVue
        })

        const input = wrapper.find('input')
        input.setValue('test')

        expect(wrapper.vm.propComp).toBe('test')

        const btn = wrapper.find('button')
        btn.trigger('click')

        expect(actions.addData).toHaveBeenCalled()

    })

})
