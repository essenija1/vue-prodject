import Vue from 'vue'; 
import VueApexCharts from 'vue-apexcharts' 

Vue.component('apexchart', VueApexCharts)

export default 
{ 
    name: '', 
data: () => ({ 
    options: { 
        chart: 
        { id: 'vuechart-example' }, 
        xaxis: 
        { categories: [ 
            "Sport", "Education", "Internet", "Food", "Transport" 
        ] } }, 
series: 
[{ 
    name: 'Category', 
    data: [55, 62, 89, 66, 98]
 }] }) } 
