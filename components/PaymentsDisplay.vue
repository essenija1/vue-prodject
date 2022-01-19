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
      <v-col :cols="2">
        Value
      </v-col>
      <v-col>
        
      </v-col>
      </v-row>
      <v-row v-for="(item, idx) in items" :key="idx">
        <v-col :cols="1">{{item.id}}</v-col>
        <v-col>{{item.date}}</v-col>
        <v-col>{{item.category}}</v-col>
        <v-col>{{item.value}}</v-col>   
          
         <!-- <v-col>
            <template>
          <v-btn 
          :items="dropdown_icon"
          label="dropdown_icon"
          v-on:click="cart += 1"> &times; 
        
            <select>
              <option value=""></option>
              <option value="completed">Добавить</option>
              <option value="deleted">Удалить</option>
            </select></v-btn>
          </template></v-col>-->

          <button><slot name="&times;" @click="onClick">&times;
          <select v-model="filter">
            
              <option value="completed">Добавить</option>
              <option value="deleted">Удалить</option>
            </select>
            </slot></button>
        
        
        
        
        
        
        
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
    data () {
      return {
          filter: 'all'
        }
    },
    watch: {
      filter (value) {
         console.log(value)
         
      }
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

<style scoped>
 
</style>
