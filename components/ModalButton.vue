<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="dropdown_icon" label="dropdown_icon" />
    <v-select
          :items="dropdown_icon"
          label="dropdown_icon"
          v-model="dropdown_icon"
        ></v-select>
    
    

    </v-card>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "ModalButton",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters({ categoryList: "getCategoryList" }),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapMutations(["addPaymentListData"]),
    ...mapActions(["fetchCategory"]),
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.addPaymentListData(data);
      this.$emit("addNewPayment", data);
    },
  },
  async mounted() {
    await this.fetchCategory();
    if(this.$route.params && this.$route.params.category) {
      this.category = this.$route.params.category
    }
    if(this.$route.query?.value){
      this.value = Number(this.$route.query.value)
    }
  },
};
</script>
