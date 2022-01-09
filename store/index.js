import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




export const localDB = {
  "page1": [
    { "id": 1, "date": "20.12.2021", "category": "Food", "value": 169 },
    { "id": 2, "date": "21.12.2021", "category": "Navigation", "value": 50 },
    { "id": 3, "date": "22.12.2021", "category": "Sport", "value": 450 },
  ],
  "page2": [
    { "id": 4, "date": "23.12.2021", "category": "Entertaiment", "value": 969 },
    { "id": 5, "date": "24.12.2021", "category": "Education", "value": 1500 },
    { "id": 6, "date": "25.12.2021", "category": "Food", "value": 200 },
  ],
  "page3": [
    { "id": 7, "date": "26.12.2021", "category": "Entertaiment", "value": 969 },
    { "id": 8, "date": "27.12.2021", "category": "Education", "value": 1500 },
    { "id": 9, "date": "28.12.2021", "category": "Food", "value": 200 },
  ],
  "page4": [
    { "id": 10, "date": "29.12.2021", "category": "Entertaiment", "value": 969 },
    { "id": 11, "date": "30.12.2021", "category": "Education", "value": 1500 },
    { "id": 12, "date": "31.12.2021", "category": "Food", "value": 200 },
  ]
}


export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIds: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData(state, payload) {
      const newUniqIdsObs = payload.filter((item)=>{
        return state.paymentsListIds.indexOf(item.id) < 0
      });
      const uniqIds = newUniqIdsObs.map(obj=>obj.id)
      state.paymentsList.push(...newUniqIdsObs);
      state.paymentsListIds.push(...newUniqIds);



    },
    addPaymentListData(state, payload) {
      state.paymentsList.push(payload);
    },
    editPaymentListFirstElement(state, payload) {
      Vue.set(state.paymentsList, 0, payload);
      state.paymentsList[0] = payload;
      state.paymentsList = [...state.paymentsList]

    },
      setCategoryData(state, payload) {
      state.categoryList = payload
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
    fetchData({ commit }, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = localDB[`page${page}`];
          resolve(items);
        }, 0);
      }).then((res) => commit('setPaymentsCategoryData', res))
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ['Sport', 'Education', 'Internet', 'Food', 'Transport'];
          resolve(items);
        }, 0)
      }).then((res) => commit('setPaymentsCategoryData', res))
    }
  },

});
