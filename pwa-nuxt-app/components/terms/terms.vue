<template>
  <section id="terms-and-conditions" class="terms-and-condition ">
    <h2 class="terms-container-header">Terms and Condition</h2>
    <div v-for="(term,i) in terms" :key="i" class="terms">
      <div class="header-terms">{{term.header}}</div>
      <div class="text-terms">{{term.text}}</div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      terms: [
        {
          header: "header1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a porta orci, quis lobortis ex. Nunc dignissim urna vel tellus malesuada, eget viverra mauris accumsan. Sed elementum metus augue, quis sollicitudin sapien tempor ac. Curabitur in pretium lacus. Praesent interdum metus eget consequat porttitor. In nec ipsum leo. Suspendisse id ligula ullamcorper, elementum felis sit amet, tempus nulla. Proin tincidunt venenatis neque, at gravida est facilisis nec. Aliquam eu urna turpis. In non neque fermentum, tempor arcu nec, volutpat lorem."
        },
        {
          header: "header2",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a porta orci, quis lobortis ex. Nunc dignissim urna vel tellus malesuada, eget viverra mauris accumsan. Sed elementum metus augue, quis sollicitudin sapien tempor ac. Curabitur in pretium lacus. Praesent interdum metus eget consequat porttitor. In nec ipsum leo. Suspendisse id ligula ullamcorper, elementum felis sit amet, tempus nulla. Proin tincidunt venenatis neque, at gravida est facilisis nec. Aliquam eu urna turpis. In non neque fermentum, tempor arcu nec, volutpat lorem."
        },
        {
          header: "header3",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a porta orci, quis lobortis ex. Nunc dignissim urna vel tellus malesuada, eget viverra mauris accumsan. Sed elementum metus augue, quis sollicitudin sapien tempor ac. Curabitur in pretium lacus. Praesent interdum metus eget consequat porttitor. In nec ipsum leo. Suspendisse id ligula ullamcorper, elementum felis sit amet, tempus nulla. Proin tincidunt venenatis neque, at gravida est facilisis nec. Aliquam eu urna turpis. In non neque fermentum, tempor arcu nec, volutpat lorem."
        },
        {
          header: "header4",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a porta orci, quis lobortis ex. Nunc dignissim urna vel tellus malesuada, eget viverra mauris accumsan. Sed elementum metus augue, quis sollicitudin sapien tempor ac. Curabitur in pretium lacus. Praesent interdum metus eget consequat porttitor. In nec ipsum leo. Suspendisse id ligula ullamcorper, elementum felis sit amet, tempus nulla. Proin tincidunt venenatis neque, at gravida est facilisis nec. Aliquam eu urna turpis. In non neque fermentum, tempor arcu nec, volutpat lorem."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import './terms.scss';
</style>