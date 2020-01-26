<template>
  <footer >
    <div class="footer-container">
      <div class="footer-scope1">
        <div class="logo">
          <img src="~/assets/images/footer/footer.svg">
        </div>
        <div class="footer-link">
          <span class="fo-link-i" v-scroll-to="homedirection">Home</span>
          <span class="fo-link-i" v-scroll-to="servicedirection">Service</span>
          <span class="fo-link-i" v-scroll-to="plandirection">Plans</span>
          <span class="fo-link-i" v-scroll-to="aboutdirection">About</span>
          <span class="fo-link-i" v-scroll-to="contactdirection">Contact</span>
          <span class="fo-link-i" v-scroll-to="termsdirection">Terms</span>
        </div>
        <div class="footer-icon">
          <router-link to="/" tag="i" class="mdi mdi-18px mdi-facebook foo-icon-i"></router-link>
          <router-link to="/" tag="i" class="mdi mdi-18px mdi-twitter foo-icon-i"></router-link>
          <router-link to="/" tag="i" class="mdi mdi-18px mdi-linkedin foo-icon-i"></router-link>
        </div>
      </div>
      <span class="footer-line"></span>
      <div class="footer-scope2">
        <p>Copyright © Canabis-Farm 2018.All right reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  components: {

  },
  data(){
    return{
      homedirection:   { el: '#home',   easing: [.6, .80, .30, 1.9],duration: 2000},
      aboutdirection:  { el: '#about',  easing: [.6, .80, .30, 1.9],duration: 2000},
      contactdirection:{ el: '#contact',easing: [.6, .80, .30, 1.9],duration: 2000},
      servicedirection:{ el: '#service',easing: [.6, .80, .30, 1.9],duration: 2000},
      plandirection:   { el: '#planes', easing: [.6, .80, .30, 1.9],duration: 2000},
      termsdirection:  { el: '#terms',  easing: [.6, .80, .30, 1.9],duration: 2000},
    }
  }
};
</script>
<style lang="scss">
@import './footer.scss'
</style>