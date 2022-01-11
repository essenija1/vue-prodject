import { mount } from '@vue/test-utils'
import { iterator } from 'core-js/fn/symbol'
import { nextTick } from 'vue/types/umd'
import Calculator from '../components/Calculator.vue'

describe('Calculator', () => {
    it('test first operand input value', () => {
        const wrapper = mount(Calculator)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)

    })
    it('test first operand input value', () => {
        const wrapper = mount(Calculator)
        const operand2 = wrapper.find("input[name=operand2]")
        //operand2.setValue('2')
        operand2.element.value = "1"
        operand2.trigger('input')
        expect(wrapper.vm.operand2).toBe(1)

    })

    it('Test sum', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find("input[name=operand1]")
        operand1.setValue('5')
        expect(wrapper.vm.operand1).toBe(5)

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue('5')
        expect(wrapper.vm.operand2).toBe(5)

        const sumBtn = wrapper.find('button[name="+"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(10)
    })



})
