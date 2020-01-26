<template>
<v-app light>
   <Carousel />
    <Appintro />
    <Appplans />
    <Appservice />
      <Faq />
    <Aboutus />
  
    <Contactus />
    <Terms />
    <!-- <Accordion /> -->
</v-app>

</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Carousel from '~/components/carousel/carousel.vue'
import Appintro from '~/components/appintro/appintro.vue'
import Appplans from '~/components/appplanes/appplanes.vue'
import Appservice from '~/components/appservice/appservice.vue'
import Aboutus from '~/components/aboutus/aboutus.vue'
import Contactus from '~/components/contactus/contactus.vue'
import Terms from '~/components/terms/terms.vue'
import Faq from '~/components/faq/faq.vue'
export default {
  components: {
    Carousel,
 
    Appintro,
    Appplans,
    Appservice,
    Aboutus,
    Contactus,
    Terms,
    Faq
    // Logo,
    // VuetifyLogo
  }
}
</script>
<style lang="scss">

</style>