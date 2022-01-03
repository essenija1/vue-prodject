<template>
  <main>
    <payments-display :items="paymentsList" />
    <pagination :cur="page" :n="n" :length="12" @paginate="changePage" />
    <button @click="openModal">Add new cost +</button>
  </main>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      addFormShow: false,
      settings: {
        content: "addPaymentForm",
        header: "Add new cost",
      },
      page: 1,
      n: 3,
    };
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElement() {
      return this.paymentsList.slice(
        this.n * (this.page - 1),
        this.n * (this.page - 1) + this.n
      );
    },
  },
  methods: {
    changePage(p) {
      this.page = p;
      this.fetchData(p);
    },
    openModal() {
      this.$modal.show("AddPaymentForm", {
        content: "addPayment",
        header: "Add new cost",
      });
    },
    ...mapActions(["fetchData"]),
    ...mapMutations({ fetch: "setPaymentsListData" }),
  },
  async created() {
    await this.fetchData(1);
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }
  },
};
</script>
<style>
</style>
