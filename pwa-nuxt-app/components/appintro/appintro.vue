<template>
   <section class="app-intro-wrapper">
       <div class="app-intro">
       <h1 class="app-intro-h">canabis farm</h1>
       <p class="app-intro-p"> Todaymine which was founded in 2019 was created by a couple of trade professionals who crossed each others path while they were involved in common platforms in the cryptocurrency trade. As todaymine.net grew and new mining farms were built, more highly experienced people were hired, especially programmers, engineers and fund managers. The existing team comes from various disciplines, but our common enthusiasm in the crypto world has bonded us together. We strongly believe in the digitalization of currencies and we do not want to be left out of this expanding community. Besides being involved in crypto-currency mining, we have since 2008 been rigorously utilizing various trading systems that have been tested through extreme market conditions to ensure consistent profits. Our manager's trade using the most advanced professional trading instruments there is, offering state of the art trading strategies to ensure profitable returns. By doing so, All our investments are gauranteed and backed up by trust fund and the billion coin. </p>
       <div class="app-intro-data">
           <div class="app-intro-data-card" v-for="item,index in items" :key="index">
                  <v-icon class="mr-5 " color="primary" medium>{{item.icon}}</v-icon>
                  <div class="data-card-text mr-2"> <span>{{item.title}}</span> <span  >{{item.text}}</span> </div>
           </div>
            <span id="planes"></span>

       </div>

       </div>
      
   </section>
</template>
<script>
export default {
    data () {
    return {
        items:[
            {title:'last invest',text:'76 days',icon:'mdi-wallet-travel'},
            {title:'last diposit',text:'76 $',icon:'mdi-wallet'},
            {title:'total withdraw',text:'6 $',icon:'mdi-wallet-travel'},
            {title:'total deposit',text:'76 $',icon:'mdi-wallet'},
            {title:'active account',text:'10 $',icon:'mdi-wallet-travel'},
            {title:'last withdraw',text:'2 $',icon:'mdi-wallet'}
            
            
            ]
    }
  },
  
  methods: {

  }
}
</script>
<style lang="scss">
@import './appintro.scss';
</style>
