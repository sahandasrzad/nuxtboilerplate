<template>
<div >
<div>sahand ,saeed</div>

</div>

 
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  middleware: 'authenticated',
  layout: 'dashboard',
    data: () => ({

  }),
  //   computed: {
  //   ...mapGetters(['isAuthenticated', 'loggedInUser'])
  // },
   methods: {
  async  getprofile () {
     
          try {
            const response = await this.$api.get( '/api/user/profile-get');
            console.log(response);
         
        
          } catch (error) {
            console.error(error);
          }


    }

  },
  mounted(){
    this.getprofile()
  }
}
</script>
