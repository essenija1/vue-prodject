import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;

    },
    addPaymentListData(state, payload) {
      //state.paymentsList[0] = payload;
      state.paymentsList.push(payload);
    },
    editPaymentListFirstElement(state, payload) {
      Vue.set(state.paymentsList, 0, payload);
      state.paymentsList[0] = payload;
      state.paymentsList = [...state.paymentsList]

    },
    setCategoryData(state, payload){
      state.CategoryList = payload
    }
  },
  getters: {
    getPaymentsListFullValuePrice: state => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0)
    },
    getPaymentsList: state => state.paymentsList?.length ? state.paymentsList : [],
    getCategoryList: state => state.categoryList,
  },
  actions: {
    fetchCategory({ commit }) {

      return new Promise(resolve => {
        setTimeout(() => {
          const items = ['Sport', 'Education', 'Internet', 'Food', 'Transport'];
      resolve(items);
        },2000)
      }).then(res => commit('setPaymentsCategoryData', res))
    }
  },

});
