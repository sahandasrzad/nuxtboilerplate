<template>
  <div>
    <section  class="about-us">
      <h2 class="about-header-parent">About us</h2>
      <div class="text">
        <div class="about-parent" v-for="(item, i) in aboutUs" :key="i">
          <div class="about-icon">
            <i class="icon-about mdi mdi-36px" :class="item.icon"></i>
          </div>

          <div class="about-text-scope">
            <div class="about-header">
              <span>{{item.Title}}</span>
            </div>
            <div class="about-content">
              <span>{{item.Content}}</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {
      aboutUs: [
        {
          Title: "ADVICE YOU CAN TRUST.",
          Content:
            "Our passion is your investing experience. If you ever feel we've missed the mark, let us know. We'll do everything we can to make it right.",
          icon: "mdi-star"
        },

        {
          Title: "SATISFACTION GUARANTEED",
          Content:
            "Our passion is your investing experience. If you ever feel we've missed the mark, let us know. We'll do everything we can to make it right.",
          icon: "mdi-check"
        },

        {
          Title: "SATISFACTION GUARANTEED",
          Content:
            "Our passion is your investing experience. If you ever feel we've missed the mark, let us know. We'll do everything we can to make it right.",
          icon: "mdi-cancel"
        },
        {
          Title: "ADVICE YOU CAN TRUST.",
          Content:
            "Our passion is your investing experience. If you ever feel we've missed the mark, let us know. We'll do everything we can to make it right.",
          icon: "mdi-pulse"
        }
      ]
    };
  },
  components: {
  }
};
</script>
<style lang="scss">
@import './aboutus.scss';
</style>