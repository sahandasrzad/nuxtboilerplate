<template>
    <v-app-bar color="#fff" class="header" max-height="140px"  fixed shrink-on-scroll dark>   
        <v-menu offset-y bottom bottom>
            <template v-slot:activator="{ on }">
               <v-app-bar-nav-icon  v-on="on" color="primary" class="hidden-md-and-up">
                 <!-- <v-icon>mdi-apps</v-icon> -->
              </v-app-bar-nav-icon>
            </template>
            <v-list>
            <v-list-item> <v-icon class="mr-2" >mdi-widgets</v-icon><v-list-item-title  class="mr-2">Home</v-list-item-title> </v-list-item>
              <v-list-item> <v-icon class="mr-2" >mdi-apps</v-icon><v-list-item-title  class="mr-2">Services</v-list-item-title> </v-list-item>
                <v-list-item> <v-icon class="mr-2" >mdi-buffer</v-icon><v-list-item-title  class="mr-2">About us</v-list-item-title> </v-list-item>
                  <v-list-item> <v-icon class="mr-2" >mdi-headphones</v-icon><v-list-item-title  class="mr-2">Contact us</v-list-item-title> </v-list-item>
            </v-list>
          </v-menu>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-btn  color="#2c3e50" class="header-link-btn" text small v-scroll-to="homedirection" >
          Home
        </v-btn>
     
        <v-btn color="#2c3e50"  class="header-link-btn" text small v-scroll-to="aboutdirection">
          About us
        </v-btn>
    
    
        <v-btn color="#2c3e50"  class="header-link-btn" text small v-scroll-to="contactdirection">
          Contact us
        </v-btn>
     
     
        <v-btn color="#2c3e50"  class="header-link-btn" text small v-scroll-to="servicedirection">
          Services
        </v-btn>
     </div>
      <v-spacer />
      <NuxtLink to="/login" class="header-login-btn" >
        <v-btn color="primary"   :dark="true"   rounded small>
          JOIN-US
        </v-btn>
      </NuxtLink>
     
    </v-app-bar>

</template>
<script>
export default {
    data () {
    return {
      homedirection:{  el: '#home', easing: [.6, .80, .30, 1.9],duration: 2000 },
      aboutdirection:{  el: '#about', easing: [.6, .80, .30, 1.9],duration: 2000 },
      contactdirection:{  el: '#contact', easing: [.6, .80, .30, 1.9],duration: 2000 },
      servicedirection:{  el: '#service', easing: [.6, .80, .30, 1.9],duration: 2000 },
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  }
}
</script>
<style lang="scss">
@import './header.scss';
</style>
