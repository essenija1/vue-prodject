<template>
  <main>
    <add-payment-form />
    <payments-display :items="paymentsList" />
    <pagination
      :cur="page"
      :n="n"
      :length="paymentsList.length"
      @paginate="changePage"
    />
  </main>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "dashboard",
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  data() {
    return {
      page: "",
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
  },
  methods: {
    changePage(p) {
      this.page = p;
    },
    ...mapActions(["fetchData"]),
    ...mapMutations({ fetch: "setPaymentsListData" }),
    fetchData() {
      return [
        {
          date: "20.12.2021",
          category: "Food",
          value: 169,
        },
        {
          date: "20.12.2021",
          category: "Transport",
          value: 360,
        },
        {
          date: "20.12.2021",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  addToPaymentList(props) {
    console.log("run");
    this.paymentsList = [...this.paymentsList, props];
  },
  async created() {
    await this.fetchData();
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }
    //this.$store.commit('setPaymentsListData', this.fetchData());
    //this.fetch(this.fetchData());
    // this.$store.dispatch('fetchData')
  },
};
</script>
<style>
</style>
