<template>
  <v-app light class="grey lighten-5 mt-12">
    <v-row class="mt-6" justify="center"   no-gutters >
      <v-col lg="6">
    
  <v-tabs v-model="models" centered color="primary" light icons-and-text>
    <v-tabs-slider color="primary"></v-tabs-slider>
     <NuxtLink to="/" tag="v-tab" >
     Home
      <v-icon>mdi-arrow-left</v-icon>
   
      </NuxtLink>
    <v-tab href="#tab-1">
      phone
      <v-icon>mdi-phone</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      google
      <v-icon>mdi-google</v-icon>
    </v-tab>
    
 
    <v-tab-item  id="tab-1">
  <Loginphone />
    </v-tab-item>
     <v-tab-item  id="tab-2">

    </v-tab-item>
  </v-tabs>

      









      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Loginphone from '~/components/loginphone/loginnum.vue'
export default {
  components: {Loginphone},
  layout:'loginlayout',
  data: () => ({
 models: 'tab-1'
  }),

  methods: {

  }
}
</script>
<style lang="sass">

</style>
