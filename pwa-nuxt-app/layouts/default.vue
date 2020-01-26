<template>
  <v-app dark>
    <Header />
    <!-- <NuxtLink to="/dashboard" > sahand</NuxtLink> -->
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/header/header.vue'
import Footer from '~/components/footer/footer.vue'
export default {
  components: { Header, Footer },
  data () {
    return {

    }
  }
}
</script>
