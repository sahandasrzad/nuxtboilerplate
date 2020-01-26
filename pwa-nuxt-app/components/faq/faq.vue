<template>
  <div>
    <div class="faq">
      <div class="faq-wrapper">
        <h2 class="faq-header" id="faq">FAQ</h2>

 <v-expansion-panels v-model="panel" multiple class="accordion" >
    <v-expansion-panel
     
      v-for="(item,i) in faqs"
      :key="i"
    >
      <v-expansion-panel-header>{{item.Question}}</v-expansion-panel-header>
      <v-expansion-panel-content>
      {{item.Answer}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

      </div>
    </div>
    <span id="contact"></span>
  </div>
</template>
<script>


export default {
  data() {
    return {
      activeName: "1",
      panel:[0,1],
      faqs: [
        {
          Question: "Question number 1",
          Answer: "this an answer for Question 1"
        },
        {
          Question: "Question number 2",
          Answer: "this an answer for Question 2"
        },
        {
          Question: "Question number 3",
          Answer: "this an answer for Question 3"
        },
        {
          Question: "Question number 4",
          Answer: "this an answer for Question 4"
        }
      ]
    };
  },
  components: {

  }
};
</script>
<style lang="scss">

@import './faq.scss';
</style>