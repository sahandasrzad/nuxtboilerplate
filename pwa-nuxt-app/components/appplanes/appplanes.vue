<template>
   <section class="app-planes-wrapper">
       <div class="app-planes">
       <h1 class="app-planes-h">Our Planes</h1>
     
       <div class="app-planes-card-wrapper">
            <v-card  class="mx-auto app-planes-card" min-width="320" min-height="420" outlined v-for="item,index in items" :key="index">
            <v-card-text class="appplanes-card-name" >{{item.name}}</v-card-text>
             <v-card-text  class="appplanes-card-percent">{{item.percent}}</v-card-text>
              <v-card-text  class="appplanes-card-min"><span>minimum-deposit : </span>{{item.minimum_value}}</v-card-text>
               <v-card-text  class="appplanes-card-max"><span>maximum-deposit : </span>{{item.maximum_value}}</v-card-text>
               <v-card-text  class="appplanes-card-days">{{item.days}}</v-card-text> 
                <v-card-text  class="appplanes-card-desc">{{item.description}}</v-card-text>
                    
            <v-card-actions id="service">
            <v-btn color="primary" medium rounded accent-4 class="btn-app-planes" >pay</v-btn>
            </v-card-actions>
  </v-card>
       </div>

       </div>
      
   </section>
</template>
<script>
export default {
    data () {
    return {
        items:[
         {id: "1", name: "plan A", percent: "999.99", days: "22", minimum_value: "33.33",  maximum_value: "44.44", description: "this is desc plan A" },
         {id: "2", name: "plan B", percent: "999.99", days: "22", minimum_value: "33.33",  maximum_value: "44.44", description: "this is desc plan A" },    
         {id: "3", name: "plan C", percent: "999.99", days: "22", minimum_value: "33.33",  maximum_value: "44.44", description: "this is desc plan A" },    
         {id: "4", name: "plan D", percent: "999.99", days: "22", minimum_value: "33.33",  maximum_value: "44.44", description: "this is desc plan A" },    ]
    }
  },
  
  methods: {

  }
}
</script>
<style lang="scss">
@import './appplanes.scss';
</style>
