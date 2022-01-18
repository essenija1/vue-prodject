<template>
  <v-container>
    <v-row>
      <v-col :cols="1">
        #
      </v-col>
      <v-col>
        Date
      </v-col>
      <v-col>
        Category
      </v-col>
      <v-col>
        Value
      </v-col>
      <v-col>
        Button
      </v-col>
      </v-row>
      <v-row v-for="(item, idx) in items" :key="idx">
        <v-col :cols="1">{{item.id}}</v-col>
        <v-col>{{item.date}}</v-col>
        <v-col>{{item.category}}</v-col>
        <v-col>{{item.value}}</v-col>   
          
          <v-col>
            <template>
          <v-btn 
          :items="dropdown_icon"
          label="dropdown_icon"
          v-on:click="cart += 1"> &times; </v-btn>
          <div class="">
              {{ message }}
              <line-chart></line-chart>
            </div>
          </template></v-col>
          <!--<button><slot name="but" @click="onClick">&times;</slot></button>-->
        
        
        
        
        
        
        
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
 // methods: {
  //  editItem(item) {
  //    console.log(item);
  //  },
  //  onClickContextItem(event, item) {
   //   const items = [
   //     {
   //       text: "Edit",
   //       action: () => {
    //        this.editItem(items);
    //      },
    //    },
     //   {
     //     text: "Delete",
     //     action: () => {
      //      console.log("delete", item);
      //    },
     //   },
     // ];

     // this.$context.show({ event, item });
   // },
  //},
};
</script>

<style>

</style>
